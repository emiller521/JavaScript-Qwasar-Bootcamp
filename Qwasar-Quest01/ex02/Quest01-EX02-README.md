# JavaScript-Qwasar-Bootcamp

Where come from the HTML tables? The first proposal for HTML tables that I have a record of was documented by Dave Raggett late in 1993, based on discussions in earlier months. It proposed mark-up to layout potentially complex material in rows & columns on a display. The proposal was concerned with the layout to be achieved, and not to do with any logical or semantic relationships among the material.

Viola may have been the first browser to support some form of tables for demonstration purposes. But, as far as I know, tables first appeared as generally-available technology on the web late in 1994 in a development version of Mosaic. This was therefore both a "specification" & a "visual formatting model" wrapped up in a piece of technology. I don't know what those browser developers thought tables would be used for. But I don't recall their protests when layout-tables "took off" in about 1995/6 and made the web a much more interesting and useful system!

HTML tables have never been purely layout-neutral logical or semantic mark-up. Tables have always been in terms of rows and columns, and have never insisted that the rows and columns comprise logical or semantic dimensions. Specifications have always permitted complex material to be enclosed in the cells. The W3C HTML recommendations for tables include their visual formatting model. However, later recommendations include optional features to enable semantic relationships to be added for use by accessibility technology.

Let's talk about our assignment:

  ****CREATE AN "index.html" FILE WITH THIS CONTENT:****
  
    <!DOCTYPE html>
    <html>
      <body>
        <table id="my_table">
            <tr>
                <th>Facts</th>
            </tr>
            <tr>
                <td>XXXX</td>
            </tr>
            <tr>
                <td>XXXX</td>
            </tr>
        </table>
      </body>
    </html>
    
  
****OUTPUT:****

    Earth is round
    The hashtag symbol is technically called an octothorpe
    Some cats are allergic to people
    The unicorn is the national animal of Scotland
    The odds of getting a royal flush are exactly 1 in 649,740
