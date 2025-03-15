'use client';

export default function MenuCategory({ categoria, menu }) {
    // Filtra solo gli elementi della categoria specificata
    const items = menu.filter((item) => item.categoria === categoria);

    // Se non ci sono elementi per questa categoria, non renderizzare nulla
    if (items.length === 0) return null;

    return (
        <section className="mt-8">
            <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2 text-custom-color">
                {categoria}
            </h2>
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
}