import { carouselstyle , buttonStyle  ,StaticTableStyle ,CardProductStyle ,PricingTableStyle} from "./consts";

export default (editor, opts = {}) => {
  const bm = editor.BlockManager;
  const carouselStyle = carouselstyle();
  const ButtonStyle = buttonStyle();
  const staticTableStyle = StaticTableStyle();
  const cardProductStyle = CardProductStyle();
  const pricingTableStyle = PricingTableStyle();

 
  bm.add("product-card" , {
    label : `
      <i class="fa fa-credit-card"></i>
      <div class="gjs-block-label">Product Card</div>
    `,
    content : `
            <div class="wrapper">
            <div class="product-img">
              <img src="http://bit.ly/2tMBBTd" height="420" width="327">
            </div>
            <div class="product-info">
              <div class="product-text">
                <h1>Harvest Vase</h1>
                <h2>by studio and friends</h2>
                <p>Harvest Vases are a reinterpretation<br> of peeled fruits and vegetables as<br> functional objects. The surfaces<br> appear to be sliced and pulled aside,<br> allowing room for growth. </p>
              </div>
              <div class="product-price-btn">
                <p><span>78</span>$</p>
                <button type="button">buy now</button>
              </div>
            </div>
          </div>

      ${cardProductStyle}
    `
  });
  
  bm.add("carousel"
 , {
    label : `
        <i class="fa fa-exchange"></i>
        <div class="gjs-block-label">Carousel</div>
    `,
    content : ` 
        <div class="w3-content w3-display-container">
          <img class="mySlides" src="#" style="width:100%">
          <img class="mySlides" src="#" style="width:100%">
          <omg class="mySlides" src="#" style="width:100%">
          
          
          <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094</button>
          <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094</button>
                     
        </div>
        
        ${carouselStyle}
    `,});
  
  bm.add("button" , {
    label : `
      <i class="fa fa-cube"></i>
      <div class="gjs-block-label">Button </div>
    `, 
    content : ` 
        <button class="button-26" role="button">Button </button>
            ${ButtonStyle}
            `
  });
  
  bm.add("image" , {
    label :  ` 
        <i class="fa fa-image"></i>
        <div class="gjs-blovk-label">Image </div>   
    `,
    
    content : ` 
      <img src="#" alt="" width="500px" height="500px">
    `
    });
  
  
   bm.add("table-dynamic" , {
    label:`
      <i class="fa fa-table"></i>
      <div class="gjs-block-label">Table Dynamic</div>
      `,
    content : `
        <div id="myDynamicTable">
          <input type="button" id="create" value="Click here" onclick="Javascript:addTable()">
        </div>
    `
  });


  bm.add("table-static" , {
      label:` 
        <i class="fa fa-table"></i>
        <div class="gjs-block-label">Table Static</div>      
      `,

      content : `
          <table>
            <caption>Statement Summary </caption>
            <thead>
              <tr>
                <th scope="col">Account</th>
                <th scope="col">Due Date</th>
                <th scope="col">Ammount</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Account">Visa - 3412</td>
                    <td data-label="Due Date">04/01/2016</td>
                    <td data-label="Amount">$1,190</td>
                    <td data-label="Period">03/01/2016 - 03/31/2016</td>
                </tr>
                <tr>
                    <td scope="row" data-label="Account">Visa - 6076</td>
                    <td data-label="Due Date">03/01/2016</td>
                    <td data-label="Amount">$2,443</td>
                    <td data-label="Period">02/01/2016 - 02/29/2016</td>
                </tr>
                <tr>
                    <td scope="row" data-label="Account">Corporate AMEX</td>
                    <td data-label="Due Date">03/01/2016</td>
                    <td data-label="Amount">$1,181</td>
                    <td data-label="Period">02/01/2016 - 02/29/2016</td>
                </tr>
            </tbody>
          
          </table>

          ${staticTableStyle}
      `
  });

  bm.add("product-card" , {
    label : `
      <i class="fa fa-credit-card"></i>
      <div class="gjs-block-label">Product Card</div>
    `,
    content : `
            <div class="wrapper">
            <div class="product-img">
              <img src="http://bit.ly/2tMBBTd" height="420" width="327">
            </div>
            <div class="product-info">
              <div class="product-text">
                <h1>Harvest Vase</h1>
                <h2>by studio and friends</h2>
                <p>Harvest Vases are a reinterpretation<br> of peeled fruits and vegetables as<br> functional objects. The surfaces<br> appear to be sliced and pulled aside,<br> allowing room for growth. </p>
              </div>
              <div class="product-price-btn">
                <p><span>78</span>$</p>
                <button type="button">buy now</button>
              </div>
            </div>
          </div>

      ${cardProductStyle}
    `
  });
  
  bm.add("pricing-table" , {
    label : ` 
      <i class="fa fa-table" ></i>
      <div class="gjp-block-lable">
          Pricing Table
      </div>
    `,
    content:` 
       <h2 style="text-align:center">Pricing Table</h2>
       <div class="columns">
          <ul class="price">
              <li class="header">Basic</li>
              <li class="grey">$9.99 / year</li>
              <li>10GB Storage</li>
              <li>10 Emails</li>
              <li>10 Domaine </li>
              <li>1GB Bandwidth</li>
              <li class="grey"><a href="#" class="button">Sign Up</a></li>
          </ul>
       </div>


       <div class="columns">
          <ul class="price">
              <li class="header" style="background-color:#04AA6D">Pro</li>
              <li class="grey">$15.99 / year</li>
              <li>20GB Storage</li>
              <li>20 Emails</li>
              <li>20 Domaine </li>
              <li>2GB Bandwidth</li>
              <li class="grey"><a href="#" class="button">Sign Up</a></li>
          </ul>
       </div>

       <div class="columns">
       <ul class="price">
           <li class="header">Premium</li>
           <li class="grey">$23.3 / year</li>
           <li>40GB Storage</li>
           <li>40 Emails</li>
           <li>40 Domaine </li>
           <li>3GB Bandwidth</li>
           <li class="grey"><a href="#" class="button">Sign Up</a></li>
       </ul>
    </div>
    ${pricingTableStyle} 
    `
  });

  
    
  
  


 



 

}
