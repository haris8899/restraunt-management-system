import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const Menu = mongoose.model('Product', menuSchema);

export default Menu;