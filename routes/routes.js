/* import { Router } from "express";

// import dependecies
import express from "express";
import cors from "cors";

import {
  addUser,
  getUser,
  getData,
  deposit,
  updateCredit,
  withdraw,
  transfer,
  filterByAmount,
} from "../controllers/users.js";

const router = Router();

// create a user route
router.post("/users", (req, res) => {
  try {
    const data = req.body;
    const user = addUser(data);
    return res.status(200).send(user);
  } catch (err) {
    res.status(err.code).send({ message: err.message });
  }
});

// create actions route
router.put("/actions/", (req, res) => {
  try {
    const action = req.query.action;
    const id = req.query.id;
    const data = req.body;

    switch (action) {
      case "deposit":
        deposit(id, data.amount);
        return res
          .status(200)
          .send({ message: `${data.amount} added to ${id} deposit` });
      case "updateCredit":
        updateCredit(id, data.amount);
        return res
          .status(200)
          .send({ message: `${id} credit is now ${data.amount}` });
      case "withdraw":
        withdraw(id, data.amount);
        return res
          .status(200)
          .send({ message: `${id} ha successfully withdraw ${data.amount}` });
      case "transfer":
        transfer(id, data.id, data.amount);
        return res
          .status(200)
          .send(
            `${id} has successfully transfered ${data.amount} to ${data.id}`
          );
      default:
        const error = new Error("Action doesn't exists");
        error.code(404);
        throw error;
    }
  } catch (err) {
    res.status(err.code).send({ message: err.message });
  }
});

// start server
 */
