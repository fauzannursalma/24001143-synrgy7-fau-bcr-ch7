import React, { useState } from "react";
import { Modal } from "flowbite-react";
import { Trash } from "react-feather";
import { useCarContext } from "../../contexts/CarContext";

interface DeleteCarProps {
  carId: string;
  onDelete: () => void;
}

const DeleteCar: React.FC<DeleteCarProps> = ({ carId, onDelete }) => {
  const { deleteCar } = useCarContext();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteCar(carId);
      setSnackbarSeverity("success");
      setSnackbarMessage("Menghapus Mobil Berhasil");
      setSnackbarOpen(true);
      onCloseModal();
      onDelete();
    } catch (error) {
      console.error("Gagal menghapus mobil:", error);
      setSnackbarSeverity("error");
      setSnackbarMessage("Gagal Menghapus Mobil");
      setSnackbarOpen(true);
    }
  };

  const onCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={onOpenModal}
        className="block text-white bg-alert-danger hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-red-800"
        type="button"
      >
        <Trash className="mr-2" />
        <span className="text-sm">Hapus</span>
      </button>

      {snackbarOpen && (
        <div
          className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg text-white ${
            snackbarSeverity === "success"
              ? "bg-alert-success"
              : "bg-alert-danger"
          }`}
        >
          {snackbarMessage}
          <button
            className="ml-4 text-white hover:text-neutral-03"
            onClick={onCloseSnackbar}
          >
            Tutup
          </button>
        </div>
      )}

      <Modal
        show={isOpen}
        size="md"
        popup={true}
        onClose={onCloseModal}
        className="mt-16 shadow-lg dark:bg-gray-800 dark:text-gray-400"
      >
        <Modal.Body>
          <div className="text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Apakah Anda yakin ingin menghapus mobil ini?
            </h3>
            <button
              onClick={handleDelete}
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Ya, Saya yakin
            </button>
            <button
              onClick={onCloseModal}
              type="button"
              className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Tidak, Batalkan
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DeleteCar;
