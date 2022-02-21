export const 


 SwiperStyle = function()  {

    return ` <style>

                .swiper {
                    width: 100%;
                    height: 80%;
                }

                .swiper-slide {
                    text-align: center;
                    font-size: 18px;
                    background: #fff;

                    /* Center slide text vertically */
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: -webkit-flex;
                    display: flex;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    -webkit-justify-content: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    -webkit-align-items: center;
                    align-items: center;
                }

                .swiper-slide img {
                    display: block;
                    width: 480px;
                    height: 500px;
                    object-fit: cover;
                }

             </style>
            
    `

 },


 buttonStyle = function() {

        return ` 
            <style>
            .button-26 {
              appearance: button;
              background-color: #1652F0;
              border: 1px solid #1652F0;
              border-radius: 4px;
              box-sizing: border-box;
              color: #FFFFFF;
              cursor: pointer;
              font-family: Graphik,-apple-system,system-ui,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
              font-size: 14px;
              line-height: 1.15;
              overflow: visible;
              padding: 12px 16px;
              position: relative;
              text-align: center;
              text-transform: none;
              transition: all 80ms ease-in-out;
              user-select: none;
              -webkit-user-select: none;
              touch-action: manipulation;
              width: fit-content;
            }
            
            .button-26:disabled {
              opacity: .5;
            }
            
            .button-26:focus {
              outline: 0;
            }
            
            .button-26:hover {
              background-color: #0A46E4;
              border-color: #0A46E4;
            }
            
            .button-26:active {
              background-color: #0039D7;
              border-color: #0039D7;
            }
            
            
            </style>
        
        `
 },


 IconStyle = function() {
     return ` 
        <style>
            i{
                
                padding:20px;
            }

        </style>
     
     `
 },

 StaticTableStyle = function(){
     return `

     <style>
     table {
        border : 1px solid #ccc;
        border-collapse : collapse;
        padding : 0;
        width : 80%;
        table-layout : fixed ; 
        margin-left: auto;
        margin-right: auto;
        margin-bottom : 15px;

    }

    table caption {
        font-size : 1.5em;
        margin : .5em 0 .75em;
    }

    table tr {
        backgorund-color : #f8f8f8;
        border : 1pc solid #ddd;
        padding : .35em;
    }

    table th , table td  {
        padding : .625em;
        text-align : center ;
    }

    table th {
        font-size : .85em;
        letter-spacing : .1em;
        text-transform : uppercase;
    }

    @media screen and (max-width : 600px){
        tabel {
            border : 0 ;
        }

        table caption {
            font-size : 1.3em;
        }

        table thead {
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
        }

        table tr {
            border-bottom: 3px solid #ddd;
            display: block;
            margin-bottom: .625em;
          }
          
          table td {
            border-bottom: 1px solid #ddd;
            display: block;
            font-size: .8em;
            text-align: right;
          }

          table td::before {
            content: attr(data-label);
            float: left;
            font-weight: bold;
            text-transform: uppercase;
          }
          
          table td:last-child {
            border-bottom: 0;
          }
    }
     </style>
       
     `
 },

 CardProductStyle = function(){
     return `
        <style>
        .wrapper {
            height: 420px;
            width: 654px;
            margin: 50px auto;
            border-radius: 7px 7px 7px 7px;
            /* VIA CSS MATIC https://goo.gl/cIbnS */
            -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
            -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
            box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
          }
          
          .product-img {
            float: left;
            height: 420px;
            width: 327px;
          }
          
          .product-img img {
            border-radius: 7px 0 0 7px;
          }
          
          .product-info {
            float: left;
            height: 420px;
            width: 327px;
            border-radius: 0 7px 10px 7px;
            background-color: #ffffff;
          }
          
          .product-text {
            height: 300px;
            width: 327px;
          }
          
          .product-text h1 {
            margin: 0 0 0 38px;
            padding-top: 52px;
            font-size: 34px;
            color: #474747;
          }
          
          .product-text h1,
          .product-price-btn p {
            font-family: 'Bentham', serif;
          }
          
          .product-text h2 {
            margin: 0 0 47px 38px;
            font-size: 13px;
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            text-transform: uppercase;
            color: #d2d2d2;
            letter-spacing: 0.2em;
          }
          
          .product-text p {
            height: 125px;
            margin: 0 0 0 38px;
            font-family: 'Playfair Display', serif;
            color: #8d8d8d;
            line-height: 1.7em;
            font-size: 15px;
            font-weight: lighter;
            overflow: hidden;
          }
          
          .product-price-btn {
            height: 103px;
            width: 327px;
            margin-top: 17px;
            position: relative;
          }
          
          .product-price-btn p {
            display: inline-block;
            position: absolute;
            top: -13px;
            height: 50px;
            font-family: 'Trocchi', serif;
            margin: 0 0 0 38px;
            font-size: 28px;
            font-weight: lighter;
            color: #474747;
          }
          
          span {
            display: inline-block;
            height: 50px;
            font-family: 'Suranna', serif;
            font-size: 34px;
          }
          
          .product-price-btn button {
            float: right;
            display: inline-block;
            height: 50px;
            width: 176px;
            margin: 0 40px 0 16px;
            box-sizing: border-box;
            border: transparent;
            border-radius: 60px;
            font-family: 'Raleway', sans-serif;
            font-size: 14px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            color: #ffffff;
            background-color: #9cebd5;
            cursor: pointer;
            outline: none;
          }
          
          .product-price-btn button:hover {
            background-color: #79b0a1;
          }
        </style>
     `
 },

 PricingTableStyle = function(){
    
    return `
      <style>
      .columns {
        float: left;
        width: 33.3%;
        padding: 8px;
      }
      
      .price {
        list-style-type: none;
        border: 1px solid #eee;
        margin: 0;
        padding: 0;
        -webkit-transition: 0.3s;
        transition: 0.3s;
      }
      
      .price:hover {
        box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2)
      }
      
      .price .header {
        background-color: #111;
        color: white;
        font-size: 25px;
      }
      
      .price li {
        border-bottom: 1px solid #eee;
        padding: 20px;
        text-align: center;
      }
      
      .price .grey {
        background-color: #eee;
        font-size: 20px;
      }
      
      .button {
        background-color: #04AA6D;
        border: none;
        color: white;
        padding: 10px 25px;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
      }
      
      @media only screen and (max-width: 600px) {
        .columns {
          width: 100%;
        }
      }
      </style>
    `


 }





