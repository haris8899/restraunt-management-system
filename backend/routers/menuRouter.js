import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import menu from '../models/menuModel.js';
import { isAdmin, isAuth } from '../utils.js';
const menuRouter = express.Router();

menuRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const menus = await menu.find({});
    res.send(menus);
  })
);

menuRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await menu.remove({});
    const createdfooditems = await menu.insertMany(data.fooditems);
    res.send({ createdfooditems });
  })
);

menuRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const Menu = await menu.findById(req.params.id);
    if (Menu) {
      res.send(Menu);
    } else {
      res.status(404).send({ message: 'Dish Not Found' });
    }
  })
);
menuRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const menu = new menu({
      name: 'samle name ' + Date.now(),
      image: '/images/p1.jpg',
      price: 0,
      category: 'sample category',
      description: 'sample description',
    });
    const createdmenu = await menu.save();
    res.send({ message: 'Item Created', menu: createdmenu });
  })
);

export default menuRouter;