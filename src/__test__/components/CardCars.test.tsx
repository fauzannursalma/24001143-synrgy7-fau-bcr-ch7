import { render, screen } from "@testing-library/react";
import CardCars from "../../components/CardCar";
import { Car } from "../../interfaces/Car";

// Mock data untuk test
const mockCars: Car[] = [
  {
    id: "08cbd537-497f-4305-b7b4-e7493c703a2c",
    plate: "B 1234 XYZ",
    manufacture: "Toyota",
    model: "Avanza",
    image: "https://example.com/avanza.jpg",
    rent_per_day: 500000,
    capacity: 7,
    description:
      "Kendaraan keluarga yang nyaman dan luas, cocok untuk perjalanan jauh dengan banyak penumpang.",
    available_at: "2024-07-10T09:00:00Z",
    transmission: "Automatic",
    available: true,
    type: "SUV",
    year: 2020,
    options: "Air Conditioning, GPS, Sunroof",
    specs: "Engine 1.5L, Power 105 HP, Fuel Type: Petrol",
    created_by: "admin",
    updated_by: "admin",
    created_at: "2024-01-01T12:00:00Z",
    updated_at: "2024-06-01T12:00:00Z",
  },
  {
    id: "1bfda124-5175-4b90-bee7-d66affdbcc66",
    plate: "D 5678 ABC",
    manufacture: "Honda",
    model: "Civic",
    image: "https://example.com/civic.jpg",
    rent_per_day: 750000,
    capacity: 5,
    description:
      "Mobil sedan yang stylish dan sporty dengan performa tinggi, ideal untuk perjalanan cepat dan nyaman.",
    available_at: "2024-07-15T10:00:00Z",
    transmission: "Manual",
    available: false,
    type: "Sedan",
    year: 2022,
    options: "Leather Seats, Bluetooth, Cruise Control",
    specs: "Engine 1.8L, Power 140 HP, Fuel Type: Petrol",
    created_by: "manager",
    updated_by: "manager",
    created_at: "2024-02-01T12:00:00Z",
    updated_at: "2024-06-15T12:00:00Z",
  },
];

// Test untuk memastikan komponen merender pesan "Mobil tidak ditemukan" jika tidak ada data mobil
test('renders "Mobil tidak ditemukan" when there are no cars', () => {
  render(<CardCars cars={[]} />);
  expect(screen.getByText("Mobil tidak ditemukan")).toBeInTheDocument();
});

// Test untuk memastikan komponen merender daftar mobil dengan benar
test("renders a list of cars", () => {
  render(<CardCars cars={mockCars} />);

  // Cek apakah semua mobil dirender dengan benar berdasarkan data mock
  mockCars.forEach((car) => {
    expect(
      screen.getByText(car.manufacture + "/" + car.model)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Rp. ${car.rent_per_day.toLocaleString("id-ID")} / Hari`)
    ).toBeInTheDocument();
    expect(screen.getByText(car.description)).toBeInTheDocument();
    expect(screen.getByText(`${car.capacity} orang`)).toBeInTheDocument();
    expect(screen.getByText(car.transmission)).toBeInTheDocument();
    expect(screen.getByText(`tahun ${car.year}`)).toBeInTheDocument();
  });
});

// Test untuk memastikan gambar mobil dirender dengan benar
test("renders car images correctly", () => {
  render(<CardCars cars={mockCars} />);

  mockCars.forEach((car) => {
    const carImage = screen.getByAltText(`${car.manufacture} ${car.model}`);
    expect(carImage).toBeInTheDocument();
    expect(carImage).toHaveAttribute("src", car.image);
  });
});

// Test untuk memastikan tombol "Pilih Mobil" ada untuk setiap mobil
test('renders "Pilih Mobil" button for each car', () => {
  render(<CardCars cars={mockCars} />);

  const buttons = screen.getAllByText("Pilih Mobil");
  expect(buttons.length).toBe(mockCars.length);
});
