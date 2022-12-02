class Product{
constructor(name, price,year){
    this.name=name;
    this.price=price;
    this.year=year;
    }
}

class UI {
    addProduct(product){
        const productList= document.getElementById("product-list")

        const element = document.createElement("div");

        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">

                <strong>Producto</strong>: ${product.name}
                <strong>Precio</strong>: ${product.price}
                <strong>Año</strong>: ${product.year}
                <a href="#" class="btn btn-danger" name="delete">Borrar</a>
            </div>        
        </div>
        `;
        productList.appendChild(element);
        
    }

    resetform()
    {
        document.getElementById("product-form").reset();


    }

    deleteProduct(element){
        if(element.name==="delete")
        {
            console.log(element.parentElement.parentElement.parentElement.remove())
            this.showMessage("Producto eliminado", "info")


        }
    }
    showMessage(message,codigo){
        const div = document.createElement("div");
        div.className = `alert alert-${codigo} mt-2`;
        div.appendChild(document.createTextNode(message))

        //como se muestra en pantalla, DOM
        const container = document.querySelector(".container")
        const app = document.querySelector("#App")
        container.insertBefore(div, app);

        setTimeout(function()  {

            document.querySelector('.alert').remove();

        }, 2000);


                            }
        }

// Eventos del DOM (Documento Object Model)

//Elemento para agregar
document.getElementById("product-form")
.addEventListener("submit", function(e)
{
const name = document.getElementById("name").value;
const price = document.getElementById("price").value;
const year = document.getElementById("year").value;


console.log(name, price, year);

const product = new Product(name, price, year)
const ui = new UI();

if(name=== "" || price === "" || year==="")
{
return ui.showMessage("Rellena toda la información");

}
  
    ui.addProduct(product);
    ui.resetform();
    ui.showMessage("Producto Agregado", "success")


e.preventDefault();
});

// Elemento para eliminar
document.getElementById("product-list").addEventListener("click", function(e)
{
  const ui = new UI();
  ui.deleteProduct(e.target);

})

