const homeController = {


    index: (req, res) => {

        let info = {
            titulo: "Controle de manutenção",
            subtitulo: "Patentes",
            patentes: ["soldado", "cabo", "sargento", "sub-tenente", "tenente"]
        }

        return res.render("index", info);
    }
};

module.exports = homeController;