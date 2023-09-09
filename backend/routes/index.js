var express = require('express');
var router = express.Router();
const PDFDocument = require('pdfkit');
var fs = require('fs');
const Client = require('../db/models/clientSchema');

require('../db/connect');


router.post('/data', async (req, res) => {
  const bodyData = req.body
  req.session.client = await req.cookies.clientId
  var clientIID = await req.session.client
  var newClient = new Client({
    clientId: clientIID,
    schema: bodyData,
  });
  const cldata = await Client.find({ clientId: clientIID }).count()
  if (cldata == 0) {
    console.log('new client')
    await newClient.save();
    res.status(201).json(newClient);
  } else {
    console.log('req sess client ', await req.session.client)
    console.log('existing client ', clientIID)
    const updatedClient = await Client.findOneAndUpdate({ clientId: clientIID },
      { $set: { schema: bodyData } },
      { new: true })
    res.status(200).json(updatedClient);
  }
})

router.get('/pdf', async function (req, res, next) {
  var pdfDoc = new PDFDocument({ size: [1439.28, 810], margin: 0 });
  res.setHeader('Content-type', 'application/pdf');
  docheight = pdfDoc.page.height
  var clientIID = await req.session.client
  if (clientIID) {
    const client = await Client.find({ clientId: clientIID })
    console.log(client)
    if (client.length > 0) {
      console.log('entered here')
      pdfDoc.fillColor('red').fontSize(15).text(`${client[0].schema.companyName || "null company"}. generated from server`, 5, 10);
    }
  } else {
    //set default outlook at first glance of the pdf
    pdfDoc.fillColor('red').fontSize(15).text(`First glance`, 5, 10);
  }
  pdfDoc.pipe(res);
  pdfDoc.end('');
});


module.exports = router;

function generateRandomNumberString(length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10); // Generates a random digit (0-9)
  }
  return result;
}