import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 } from "uuid";
import Header from "../(components)/Header";

type ProductFormData = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};

type CreateProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (formData: ProductFormData) => void;
};

const CreateProductModal = ({
  isOpen,
  onClose,
  onCreate,
}: CreateProductModalProps) => {
  const [formData, setFormData] = useState({
    productId: v4(),
    name: "",
    price: 0,
    stockQuantity: 0,
    rating: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "price" || name === "stockQuantity" || name === "rating"
          ? parseFloat(value)
          : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  if (!isOpen) return null;

  const labelCSSStyles = "block text-sm font-medium to-gray-700";
  const inputCssStyles =
    "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <Header name="Créer un nouveau produit" />
        <form onSubmit={handleSubmit} className="mt-5">
          {/* PRODUCT NAME */}
          <label htmlFor="productName" className={labelCSSStyles}>
            Nom du Produit
          </label>
          <input
            type="text"
            name="name"
            placeholder="Nom du produit"
            onChange={handleChange}
            value={formData.name}
            className={inputCssStyles}
            required
          />
          {/* PRICE */}
          <label htmlFor="productPrice" className={labelCSSStyles}>
            Prix
          </label>
          <input
            type="number"
            name="price"
            placeholder="Prix"
            onChange={handleChange}
            value={formData.price}
            className={inputCssStyles}
            required
          />
          {/* STOCK QUANTITY */}
          <label htmlFor="stockQuantity" className={labelCSSStyles}>
            Quantité en stock
          </label>
          <input
            type="number"
            name="stockQuantity"
            placeholder="Quantité en stock"
            onChange={handleChange}
            value={formData.stockQuantity}
            className={inputCssStyles}
            required
          />
          {/* Note */}
          <label htmlFor="rating" className={labelCSSStyles}>
            Note
          </label>
          <input
            type="number"
            name="rating"
            placeholder="Note"
            onChange={handleChange}
            value={formData.rating}
            className={inputCssStyles}
            required
          />
          {/* CREATE ACTIONS */}
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Créer
          </button>
          <button
            type="button"
            onClick={onClose}
            className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
          >
            Annuler
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;
