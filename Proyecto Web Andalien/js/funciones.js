class contenido_menu {
    constructor() {
        this.menu = document.getElementById("menu-content");
    }

    getMenu(){
        this.menu.className = "menu-content";
        this.menu.innerHTML = `
        
        `;

    }

    getNormativas(){
        this.menu.className = "menu-content";
        this.menu.innerHTML = `
        <div class="row" style="text-align: center;">
            <div class="col-sm-6">
                <h3>NCh 409</h3>
                <p>
                    La norma NCh409 es la regulación chilena que define la calidad que debe tener el agua potable. 
                    Establece los límites permitidos de sustancias químicas, microorganismos y características físicas 
                    del agua para asegurar que sea segura para el consumo humano.
                </p>
            </div>
            <div class="col-sm-6">
                <h3>NCh 1333</h3>
                <p>
                    La norma NCh1333 es la regulación que define la calidad del agua utilizada para riego agrícola. 
                    Señala los niveles aceptables de sales, metales pesados, microorganismos y otros parámetros que 
                    pueden afectar a las plantas, al suelo o a las personas.
                </p>
            </div>
        </div>
        `;
    }

    getPuntos(){
        this.menu.className = "menu-content";

        // 1️⃣ LIMPIAR EL CONTENEDOR Y CREAR EL MAPA
        this.menu.innerHTML = `
            <div id="map" style="width:100%; height:600px;"></div>
        `;

        // 2️⃣ INICIALIZAR EL MAPA DESPUÉS DE CREAR EL DIV
        var map = L.map('map').setView([-36.80, -73.00], 12);

        // 3️⃣ Capa tipo Google Earth (Satélite)
        L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        }).addTo(map);

        // 4️⃣ TUS PUNTOS
        var puntos = [
            { nombre: "Punto 1", lat: -36.797937, lon: -72.949760 },
            { nombre: "Punto 2", lat: -36.814266, lon: -73.007413 },
            { nombre: "Punto 3", lat: -36.775903, lon: -73.042491 }
        ];

        // 5️⃣ Colocar marcadores
        puntos.forEach(p => {
            L.marker([p.lat, p.lon])
                .addTo(map)
                .bindPopup(`<b>${p.nombre}</b>`);
        });
    }

    getDiagramas(){
        this.menu.className = "menu-content-diagramas";
        this.menu.innerHTML = `
        <div class="botones-diagrama-container">
            <button class="btn-minimal" onclick="diagr.Piper()">Piper</button>
            <button class="btn-minimal" onclick="diagr.Stiff()">Stiff</button>
            <button class="btn-minimal" onclick="diagr.Gibbs()">Gibbs</button>
            <button class="btn-minimal" onclick="diagr.SAR()">I. SAR</button>
        </div>
    
        <div id="content-diagrams" class="contenido-diagrama">
        </div>
        `;
    
        // Instanciamos el handler de diagramas ahora que el DOM interno ya existe
        window.diagr = new Cargar_Diagramas();
    }

    getTablasResultados(){
        this.menu.className = "menu-content";

        this.menu.innerHTML = `
        <div class="row tarjetas-presupuesto">
    
            <div class="col-3 tarjeta">
                <img src="imagenes/PresupuestoTitu.png" class="img-presupuesto">
                <h3>Presupuesto del ensayo de Titulación</h3>
            </div>
    
            <div class="col-3 tarjeta">
                <img src="imagenes/PresupuestoEspe.png" class="img-presupuesto">
                <h3>Presupuesto del ensayo con el espectrofotómetro IRIS</h3>
            </div>
    
            <div class="col-3 tarjeta">
                <img src="imagenes/PresupuesteoIC.png" class="img-presupuesto">
                <h3>Presupuesto del ensayo con el ICP-MS</h3>
            </div>
    
            <div class="col-3 tarjeta">
                <img src="imagenes/PresupuestoVeh.png" class="img-presupuesto">
                <h3>Presupuesto del trayecto en Vehículo</h3>
            </div>
    
        </div>
        `;
    }
    getMenu(){
    this.menu.className = "menu-content";

    this.menu.innerHTML = `
        <!-- Banner con la foto -->
        <div class="banner-agua">
            <div class="banner-overlay"></div>
        </div>

        <!-- Contenido simple debajo -->
        <section class="contenido-info">
            <h2>Río Andalién</h2>

            <p>
                El río Andalién es un curso de agua ubicado en la región del Biobío. 
                Forma parte de la cuenca hidrográfica.
                Y es un punto clave para el monitoreo y análisis de calidad hídrica, ya que atravieza por 
                zonas urbanas, forestales, industriales hasta llegar a su desembocadura en la Bahía de Penco.
            </p>
        </section>
    `;
}

        
}


class Cargar_Diagramas {
    constructor(){
        // no asumimos que exista el DOM aún
        this.diagramas_cont = null;
    }

    _ensureContainer() {
        if (!this.diagramas_cont) {
            this.diagramas_cont = document.getElementById("content-diagrams");
        }
        return !!this.diagramas_cont;
    }

    Piper(){
        if (!this._ensureContainer()) return console.warn("content-diagrams no existe");

        this.diagramas_cont.innerHTML = `
            <div class="row">
                <div class="col-12">
                    <div class="img-frame">
                        <img id="img-diagram" src="imagenes/Diagrama_Piper.png" alt="Diagrama" class="img-diagram">
                    </div>
                    <h3 class="titulo-resultados">Resultados</h3>
                    <p>
                        En base a los resultados entregados por el gráfico de Piper, indicaría que las aguas
                        del río Andalién se clasifican Cl-Na.
                    </p>
                </div>
            </div>
        `;
    }

    Stiff(){
        if (!this._ensureContainer()) return console.warn("content-diagrams no existe");

        this.diagramas_cont.innerHTML = `
        <div class="row">
            <div class="col-4 text-center">
                <div class="img-frame">
                    <img id="img-diagram" src="imagenes/Diagrama_Stiff_1.png" alt="Diagrama" class="img-diagram">
                </div>
                <h3 class="titulo-resultados">Resultado del gráfico de Stiff del Punto 1.</h3>
            </div>
            <div class="col-4 text-center">
                <div class="img-frame">
                    <img id="img-diagram" src="imagenes/Diagrama_Stiff_2.png" alt="Diagrama" class="img-diagram">
                </div>
                <h3 class="titulo-resultados">Resultado del gráfico de Stiff del Punto 2.</h3>
            </div>
            <div class="col-4 text-center">
                <div class="img-frame">
                    <img id="img-diagram" src="imagenes/Diagrama_Stiff_3.png" alt="Diagrama" class="img-diagram">
                </div>
                <h3 class="titulo-resultados">Resultado del gráfico de Stiff del Punto 3.</h3>
            </div>
        </div>
        `;
    }

    Gibbs(){
        if (!this._ensureContainer()) return console.warn("content-diagrams no existe");

        this.diagramas_cont.innerHTML = `
        <div class="row">
            <div class="col-6 text-center">
                <div class="img-frame">
                    <img id="img-diagram" src="imagenes/Gibbs_Aniones.png" alt="Diagrama" class="img-diagram">
                </div>
                <h3 class="titulo-resultados">Resultado del gráfico de Gibbs para aniones.</h3>
            </div>
            <div class="col-6 text-center">
                <div class="img-frame">
                    <img id="img-diagram" src="imagenes/Gibbs_Cationes.png" alt="Diagrama" class="img-diagram">
                </div>
                <h3 class="titulo-resultados">Resultado del gráfico de Gibbs para cationes.</h3>
            </div>
        </div>
        `;
    }

    SAR(){
        if (!this._ensureContainer()) return console.warn("content-diagrams no existe");

        this.diagramas_cont.innerHTML = `
            <div class="row">
                <div class="col-12">
                    <div class="img-frame">
                        <img id="img-diagram" src="imagenes/I_SAR.png" alt="Diagrama" class="img-diagram">
                    </div>
                    <h3 class="titulo-resultados">Resultados</h3>
                    <p>
                        El cálculo del SAR, realizado a partir de las concentraciones de Na⁺, Ca²⁺
                        y Mg²⁺ expresadas en meq/L, arrojó valores de 1,97; 0,16 y 1,81 para los puntos 1, 2 y 3,
                        respectivamente. Estos valores se encuentran ampliamente dentro de la categoría S1 (bajo
                        riesgo) según la clasificación de la FAO (2003) y de Richards (1954), que establece que
                        las aguas con SAR < 10 no representan un peligro significativo de dispersión de arcillas
                        ni de degradación estructural de los suelos.
                    </p>
                </div>
            </div>
        `;
      

    }
}

