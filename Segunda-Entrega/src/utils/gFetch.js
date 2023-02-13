let productos = [
    { id: 'BotinesPredatorAdidas' ,categoria: 'Botines', name: "BOTINES PREDATOR EDGE.3 FG ADIDAS",   precio: 30999, imagen:'https://www.digitalsport.com.ar/files/products/637fa2b9ae6a8-578449-500x500.jpg' },
    { id: 'BotinesPuma' ,categoria: 'Botines', name: "BOTINES TACTO II FG/AG PUMA", precio: 13999, imagen:'https://www.digitalsport.com.ar/files/products/632b40cea5935-557402-500x500.jpg' },
    { id: 'BotinesSanCiroTopper' ,categoria: 'Botines', name: "BOTINES SAN CIRO V FG TOPPER",    precio: 13599, imagen:'https://www.digitalsport.com.ar/files/products/6283a86f4db97-553251-500x500.jpg' },
    { id: 'BotinesRigoreDiadora' ,categoria: 'Botines', name: "BOTINES RIGORE CAMPO DIADORA", precio: 17099, imagen:'https://www.digitalsport.com.ar/files/products/63192efe9750f-602926-500x500.jpg' },
    { id: 'BotinesDominoDiadora' ,categoria: 'Botines', name: "BOTINES DOMINO CAMPO DIADORA", precio: 17099, imagen:'https://www.digitalsport.com.ar/files/products/63192ef32fad8-602924-500x500.jpg' },
    { id: 'BotinesStamina' ,categoria: 'Botines', name: "BOTINES STAMINA CAMPO ATHIX", precio: 8899 , imagen:'https://www.digitalsport.com.ar/files/products/631a1dd96a432-602916-500x500.jpg' },
    { id: 'CamisetaBocaJuniors' ,categoria: 'Camisetas', name: "CAMISETA BOCA JUNIORS AWAY ADIDAS", precio: 11699, imagen:'https://www.digitalsport.com.ar/files/products/6141fb0f44478-565173-500x500.jpg' },
    { id: 'CamisetaRiverPlate' ,categoria: 'Camisetas', name: "CAMISETA RIVER PLATE ADIDAS", precio: 7890, imagen:'https://www.digitalsport.com.ar/files/products/611297b6622db-511586-500x500.jpg' },
    { id: 'CamisetaArgentina' ,categoria: 'Camisetas', name: "CAMISETA ARGENTINA AFA 22 ADIDAS", precio: 18699, imagen:'https://www.digitalsport.com.ar/files/products/62c8c365de160-574896-500x500.jpg' },
    { id: 'CamisetaJuventus' ,categoria: 'Camisetas', name: "CAMISETA JUVENTUS HOME ADIDAS", precio: 14890, imagen:'https://www.digitalsport.com.ar/files/products/62db31f3ded8f-540268-500x500.jpg' },
    { id: 'CamisetaAjax' ,categoria: 'Camisetas', name: "CAMISETA AJAX 22/23 ADIDAS", precio: 16999, imagen:'https://www.digitalsport.com.ar/files/products/62db3215b911a-565178-500x500.jpg' },
      
  ] 
  
    export const gFetch = (id) => {
        return new Promise(( res, rej )=>{    
            setTimeout(()=>{
                res( id ? productos.find(producto => producto.id === id) : productos)
            }, 1000) 
        })  
    } 

    export const gFetchOne = (id) => {
        return new Promise(( res, rej )=>{    
            setTimeout(()=>{
                res( productos.find(producto => producto.id === id) )
            }, 1000) 
        })  
    } 
    