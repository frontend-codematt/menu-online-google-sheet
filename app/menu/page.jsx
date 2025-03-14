import getMenu from "@/app/utils/getMenu";

export default async function Page() {
  const menu = await getMenu();

  // Raggruppiamo i piatti per categoria
  const categorie = [...new Set(menu.map((item) => item.categoria))];

  return (
    <main className="max-w-3xl mx-auto p-6 font-sans">
      {/* LOGO segnaposto */}
      <div className="w-48 h-24 bg-gray-300 mx-auto flex items-center justify-center rounded-lg mb-6">
        <p className="text-gray-700 text-lg font-bold">LOGO</p>
      </div>

      {/* Sezioni del menu */}
      {categorie.map((categoria, index) => {
        const items = menu.filter((item) => item.categoria === categoria);

        return (
          <section key={index} className="mt-8">
            <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2 text-custom-color">{categoria}</h2>
            <ul className="mt-4 space-y-1">
              {items.map((item, idx) => (
                <li key={idx} className="flex justify-between border-b border-gray-200 pb-2">
                  <span>{item.nome}</span>
                  <span className="font-semibold">€ {item.prezzo && item.prezzo.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </main>
  );
}
