import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Menu from '../models/menuModel.js';
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
menuRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const menu = await Menu.findById(req.params.id);
    if (menu) {
      menu.name = req.body.name;
      menu.price = req.body.price;
      menu.image = req.body.image;
      menu.category = req.body.category;
      menu.description = req.body.description;
      const updatedmenu = await menu.save();
      res.send({ message: 'Item Updated', menu: updatedmenu });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);
menuRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const menu = new Menu({
      name: 'sample name ' + Date.now(),
      image: '/images/nf.jpg',
      category: 'sample category',
      description: 'sample description',
      price: 0,
    });
    const createdmenu = await menu.save();
    res.send({ message: 'Item Created', menu: createdmenu });
  })
);
menuRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const menu = await Menu.findById(req.params.id);
    if (menu) {
      const deleteitem = await menu.remove();
      res.send({ message: 'Product Deleted', product: deleteitem });
    } else {
      res.status(404).send({ message: 'item Not Found' });
    }
  })
);
export default menuRouter;