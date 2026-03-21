import { NextResponse } from "next/server";

const trees = [
  { id: 1, name: "Mango Tree", price: 25, type: "Fruit Bearing", img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&q=80", rating: 4.5, reviews: 312 },
  { id: 2, name: "Neem Tree", price: 15, type: "Medicinal", img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=600&q=80", rating: 4.6, reviews: 204 },
  { id: 3, name: "Banyan Tree", price: 45, type: "Shade Giving", img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80", rating: 4.7, reviews: 178 },
  { id: 4, name: "Sandalwood", price: 30, type: "Medicinal", img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80", rating: 4.4, reviews: 156 },
  { id: 5, name: "Peepal Tree", price: 40, type: "Shade Giving", img: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=600&q=80", rating: 4.5, reviews: 289 },
  { id: 6, name: "Papaya Tree", price: 20, type: "Fruit Bearing", img: "https://images.unsplash.com/photo-1596547609652-9cb5d8d736bb?auto=format&fit=crop&w=600&q=80", rating: 4.3, reviews: 143 },
  { id: 7, name: "Gulmohar", price: 25, type: "Shade Giving", img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80", rating: 4.6, reviews: 198 },
  { id: 8, name: "Guava Tree", price: 22, type: "Fruit Bearing", img: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&w=600&q=80", rating: 4.5, reviews: 267 },
  { id: 9, name: "Amla Tree", price: 28, type: "Medicinal", img: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80", rating: 4.4, reviews: 134 },
];

export async function GET() {
  return NextResponse.json(trees);
}
