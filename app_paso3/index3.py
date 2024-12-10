from flask import Flask, render_template, request # type: ignore # ATENCION   AGREGAR EL request.... PARA QUE PUEDA LLEVAR EL ID

app = Flask(__name__)  # Guarda en una variable la ruta de inicio de la app

# Rutas de procesamiento (direccionan a algún lugar)
@app.route('/')  # Método que crea una URL
def home():  # Función que devuelve información al navegador
    return render_template("home.html")  # Retorna el archivo dentro de la carpeta templates

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/contacts')
def contacts():
    return render_template("contacts.html")

@app.route('/otra_pagina2.html')
def otra_pagina2():
    # Obtiene el valor del parámetro 'id' de la solicitud GET
    id = request.args.get('id')
    # Realiza cualquier procesamiento necesario con el valor de 'id'
    # Por ejemplo, puedes buscar datos relacionados con ese ID en una base de datos
    # Luego, renderiza la plantilla 'otra_pagina2.html' con el valor de 'id'
    return render_template('otra_pagina2.html', id=id)

# Validamos si estamos en el archivo principal para que siempre se quede
# escuchando una petición del usuario y si se cumple ejecuta el app.run
if __name__ == '__main__':
    app.run(debug=True)  # Avisamos que estamos en un entorno de prueba
                         # y se actualiza el servidor automáticamente
