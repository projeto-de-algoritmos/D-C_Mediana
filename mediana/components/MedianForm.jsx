"use client";
import React from "react";

import { useForm } from "react-hook-form";

const MedianForm = ({ numbers, setNumbers }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addNumber = (data) => {
    setNumbers([...numbers, Number(data.number)]);
  };

  return (
    <div className="p-6 border-2 rounded flex flex-col gap-2">
      <h2 className="font-medium">
        Adicione os números para calcular a mediana
      </h2>
      <form
        className="flex flex-col gap-5"
        action=""
        onSubmit={handleSubmit(addNumber)}
      >
        <div>
          <label
            className="block mb-2 text-sm text-gray-900 dark:text-white"
            htmlFor="number"
          >
            Número:
          </label>
          <input
            max={9999}
            type="number"
            id="number"
            name="number"
            required
            {...register("number")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex justify-end gap-5">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded transition"
            type="submit"
          >
            Adiconar
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded transition"
            onClick={() => setNumbers([])}
            type="reset"
          >
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
};

export default MedianForm;
