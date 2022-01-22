import fs from "fs";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get("/films", (req, res) => {
    fs.readFile("./cinema.json", "utf8", (err, cinemaJson) => {
        if (err) {
            console.log("File read failed in GET /films: " + err);
            res.status(500).send("File read failed");
            return;
        }
        console.log("GET: /films");

        var cinemaData = JSON.parse(cinemaJson);
        var films = cinemaData.films;
        var filmsJson = JSON.stringify(films);

        res.send(filmsJson);
    });
});

app.get("/films/:id", (req, res) => {
    fs.readFile("./cinema.json", "utf8", (err, cinemaJson) => {
        if (err) {
            console.log(
                "File read failed in GET /films/" + req.params.id + " + err"
            );
            res.status(500).send("File read failed");
            return;
        }
        var cinema = JSON.parse(cinemaJson);

        var filmIndex = cinema.films.findIndex(
            (filmTmp) => filmTmp.id == req.params.id
        );
        if (filmIndex != -1) {
            res.send(cinema.films[filmIndex]);
        } else {
            console.log("Film by id = " + req.params.id + " does not exists");
            res.status(500).send(
                "Film by id = " + req.params.id + " does not exists"
            );
            return;
        }
    });
});

app.put("/films/:id", (req, res) => {
    fs.readFile("./cinema.json", "utf8", (err, cinemaJson) => {
        if (err) {
            console.log(
                "File read failed in GET /films/" + req.params.id + " + err"
            );
            res.status(500).send("File read failed");
            return;
        }

        var cinema = JSON.parse(cinemaJson);

        var elementIndexInArray = -1;

        var filmIndex = cinema.films.findIndex((filmTmp, index) => {
            if (filmTmp.id == req.body.id) elementIndexInArray = index;
            return filmTmp.id == req.body.id;
        });

        if (filmIndex != -1) {
            cinema.films[elementIndexInArray] = { ...req.body };
            var newList = JSON.stringify(cinema);
            fs.writeFile("./cinema.json", newList, (err) => {
                if (err) {
                    console.log(
                        "Error writing file in PUT /films/" +
                            req.params.id +
                            ": " +
                            err
                    );
                    res.status(500).send("Error writing file cinema.json");
                } else {
                    res.status(204).send(cinema.films[filmIndex]);
                    console.log(
                        "Successfully edited film with id = " + req.params.id
                    );
                }
            });
        } else {
            console.log("Film by id = " + req.params.id + " does not exists");
            res.status(500).send(
                "Film by id = " + req.params.id + " does not exists"
            );
            return;
        }
    });
});

app.delete("/films/:id", (req, res) => {
    fs.readFile("./cinema.json", "utf8", (err, cinemaJson) => {
        if (err) {
            console.log("File read failed in DELETE /films: " + err);
            res.status(500).send("File read failed");
            return;
        }
        var cinema = JSON.parse(cinemaJson);

        var filmIndex = cinema.films.findIndex(
            (filmTmp) => filmTmp.id == req.params.id
        );
        if (filmIndex != -1) {
            cinema.films.splice(filmIndex, 1);
            var newList = JSON.stringify(cinema);
            fs.writeFile("./cinema.json", newList, (err) => {
                if (err) {
                    console.log(
                        "Error writing file in DELETE /films/" +
                            req.params.id +
                            ": " +
                            err
                    );
                    res.status(500).send("Error writing file cinema.json");
                } else {
                    res.status(204).send();
                    console.log(
                        "Successfully deleted film with id = " + req.params.id
                    );
                }
            });
        } else {
            console.log("Film by id = " + req.params.id + " does not exists");
            res.status(500).send(
                "Film by id = " + req.params.id + " does not exists"
            );
            return;
        }
    });
});

app.post("/films", (req, res) => {
    fs.readFile("./cinema.json", "utf8", (err, cinemaJson) => {
        if (err) {
            console.log("File read failed in POST /films: " + err);
            res.status(500).send("File read failed");
            return;
        }
        var cinema = JSON.parse(cinemaJson);
        var element = cinema.films.find(
            (elementTmp) => elementTmp.id == req.body.id
        );
        if (!element) {
            cinema.films.push(req.body);
            var newList = JSON.stringify(cinema);
            fs.writeFile("./cinema.json", newList, (err) => {
                if (err) {
                    console.log("Error writing file in POST /films: " + err);
                    res.status(500).send("Error writing file cinema.json");
                } else {
                    res.status(201).send(req.body);
                    console.log(
                        "Successfully wrote file cinema.json and added new element with id = " +
                            req.body.id
                    );
                }
            });
        } else {
            console.log("Film by id = " + req.body.id + " already exists");
            res.status(500).send(
                "Film by id = " + req.body.id + " already exists"
            );
            return;
        }
    });
});

app.listen(4201, () => console.log("Server STARTED!"));

// app.get("/orders", (req, res) => {
//     fs.readFile("./orders.json", "utf8", (err, ordersJson) => {
//         if (err) {
//             console.log("File read failed in GET /orders: " + err);
//             res.status(500).send("File read failed");
//             return;
//         }
//         console.log("GET: /orders");
//         res.send(ordersJson);
//     });
// });

// app.get("/orders/:id", (req, res) => {
//     fs.readFile("./orders.json", "utf8", (err, ordersJson) => {
//         if (err) {
//             console.log(
//                 "File read failed in GET /orders/" + req.params.id + ": " + err
//             );
//             res.status(500).send("File read failed");
//             return;
//         }
//         var orders = JSON.parse(ordersJson);
//         var order = orders.find((ordertmp) => ordertmp.id == req.params.id);
//         if (!order) {
//             console.log("Can't find order with id: " + req.params.id);
//             res.status(500).send("Cant find order with id: " + req.params.id);
//             return;
//         }
//         var orderJSON = JSON.stringify(order);
//         console.log("GET /orders/" + req.params.id);
//         res.send(orderJSON);
//     });
// });

// app.post("/orders", (req, res) => {
//     fs.readFile("./orders.json", "utf8", (err, ordersJson) => {
//         if (err) {
//             console.log("File read failed in POST /orders: " + err);
//             res.status(500).send("File read failed");
//             return;
//         }
//         var orders = JSON.parse(ordersJson);
//         var order = orders.find((ordertmp) => ordertmp.id == req.body.id);
//         if (!order) {
//             orders.push(req.body);
//             var newList = JSON.stringify(orders);
//             fs.writeFile("./orders.json", newList, (err) => {
//                 if (err) {
//                     console.log("Error writing file in POST /orders: " + err);
//                     res.status(500).send("Error writing file orders.json");
//                 } else {
//                     res.status(201).send(req.body);
//                     console.log(
//                         "Successfully wrote file orders.json and added new order with id = " +
//                             req.body.id
//                     );
//                 }
//             });
//         } else {
//             console.log("Order by id = " + req.body.id + " already exists");
//             res.status(500).send(
//                 "Order by id = " + req.body.id + " already exists"
//             );
//             return;
//         }
//     });
// });

// app.put("/orders/:id", (req, res) => {
//     fs.readFile("./orders.json", "utf8", (err, ordersJson) => {
//         if (err) {
//             console.log(
//                 "File read failed in PUT /orders/" + req.params.id + ": " + err
//             );
//             res.status(500).send("File read failed");
//             return;
//         }
//         var orders = JSON.parse(ordersJson);
//         var orderBody = orders.find((ordertmp) => ordertmp.id == req.body.id);
//         if (orderBody && orderBody.id != req.params.id) {
//             console.log("Order by id = " + orderBody.id + " already exists");
//             res.status(500).send(
//                 "Order by id = " + orderBody.id + " already exists"
//             );
//             return;
//         }
//         var order = orders.find((ordertmp) => ordertmp.id == req.params.id);
//         if (!order) {
//             orders.push(req.body);
//             var newList = JSON.stringify(orders);
//             fs.writeFile("./orders.json", newList, (err) => {
//                 if (err) {
//                     console.log(
//                         "Error writing file in PUT /orders/" +
//                             req.params.id +
//                             ": " +
//                             err
//                     );
//                     res.status(500).send("Error writing file orders.json");
//                 } else {
//                     res.status(201).send(req.body);
//                     console.log(
//                         "Successfully wrote file orders.json and added new order with id = " +
//                             req.body.id
//                     );
//                 }
//             });
//         } else {
//             for (var i = 0; i < orders.length; i++) {
//                 if (orders[i].id == order.id) {
//                     orders[i] = req.body;
//                 }
//             }
//             var newList = JSON.stringify(orders);
//             fs.writeFile("./orders.json", newList, (err) => {
//                 if (err) {
//                     console.log(
//                         "Error writing file in PUT /orders/" +
//                             req.params.id +
//                             ": " +
//                             err
//                     );
//                     res.status(500).send("Error writing file orders.json");
//                 } else {
//                     res.status(200).send(req.body);
//                     console.log(
//                         "Successfully wrote file orders.json and edit order with old id = " +
//                             req.params.id
//                     );
//                 }
//             });
//         }
//     });
// });

// app.delete("/orders/:id", (req, res) => {
//     fs.readFile("./orders.json", "utf8", (err, ordersJson) => {
//         if (err) {
//             console.log("File read failed in DELETE /orders: " + err);
//             res.status(500).send("File read failed");
//             return;
//         }
//         var orders = JSON.parse(ordersJson);
//         var orderIndex = orders.findIndex(
//             (ordertmp) => ordertmp.id == req.params.id
//         );
//         if (orderIndex != -1) {
//             orders.splice(orderIndex, 1);
//             var newList = JSON.stringify(orders);
//             fs.writeFile("./orders.json", newList, (err) => {
//                 if (err) {
//                     console.log(
//                         "Error writing file in DELETE /orders/" +
//                             req.params.id +
//                             ": " +
//                             err
//                     );
//                     res.status(500).send("Error writing file orders.json");
//                 } else {
//                     res.status(204).send();
//                     console.log(
//                         "Successfully deleted order with id = " + req.params.id
//                     );
//                 }
//             });
//         } else {
//             console.log("Order by id = " + req.params.id + " does not exists");
//             res.status(500).send(
//                 "Order by id = " + req.params.id + " does not exists"
//             );
//             return;
//         }
//     });
// });
