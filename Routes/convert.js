const express = require('express')
const router = express.Router()
const showdown = require('showdown')
/**showdown javascript library is used to convert markdown to HTML efficiently */

const converter = new showdown.Converter();
/**Creating showdown instance for converting */

router.post('/', (req, res) => {
   try {
      if (typeof req.body.data === undefined || typeof req.body.data === 'object') {
         res.json({ 'error': 'no data found' })
      } else {
         const parsedData = req.body.data
         const html = converter.makeHtml(parsedData)
         res.json({ 'status': 'success', code: 200, 'data': { 'markdown': parsedData, 'html': html } })
      }
   } catch (err) {
      console.log(err)
      res.status(500).json({ 'status': 'error', 'message': 'internal sever error' })
   }
})

module.exports = router;