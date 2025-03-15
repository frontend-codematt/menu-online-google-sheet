import getMenu from "@/app/utils/getMenu";
import MenuCategory from "../components/MenuCategory";
import MenuAuto from "../components/MenuAuto";

export default async function Page() {
  const menu = await getMenu();

  // Raggruppiamo i piatti per categoria
  

  return (
    <main className="max-w-3xl mx-auto p-6 font-sans">
      {/* LOGO segnaposto */}
      <div className="w-48 h-24 bg-gray-300 mx-auto flex items-center justify-center rounded-lg mb-6">
        <p className="text-gray-700 text-lg font-bold">LOGO</p>
      </div>

      <MenuAuto menu={menu} />
      
    </main>
  );
}
