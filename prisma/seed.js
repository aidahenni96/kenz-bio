// prisma/seed.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Création des catégories
  const céréales = await prisma.category.create({ data: { name: 'Céréales Bio' } });
  const biscuits = await prisma.category.create({ data: { name: 'Biscuits Bio' } });
  const infusions = await prisma.category.create({ data: { name: 'Infusions Bio' } });
  const accessoires = await prisma.category.create({ data: { name: 'Accessoires Bébé Bio' } });

  // Liste des produits
  const produits = [
    // Céréales (5)
    { name: 'Céréale Amande et Miel', description: 'Céréales croustillantes amande et miel.', price: 4.5, imageUrl: 'https://example.com/cereale1.jpg', categoryId: céréales.id },
    { name: 'Céréale Épeautre Naturel', description: 'Épeautre complet pour petit‑déjeuner.', price: 5.0, imageUrl: 'https://example.com/cereale2.jpg', categoryId: céréales.id },
    { name: 'Céréale Seigle & Graines', description: 'Seigle bio et mélange de graines.', price: 5.2, imageUrl: 'https://example.com/cereale3.jpg', categoryId: céréales.id },
    { name: 'Céréale Multigrains', description: 'Mélange de blé, orge et avoine.', price: 4.8, imageUrl: 'https://example.com/cereale4.jpg', categoryId: céréales.id },
    { name: 'Céréale Avoine Flocons', description: 'Flocons d’avoine pour porridge.', price: 3.9, imageUrl: 'https://example.com/cereale5.jpg', categoryId: céréales.id },
    // Biscuits (5)
    { name: 'Biscuit Sésame', description: 'Biscuit croquant au sésame.', price: 3.0, imageUrl: 'https://example.com/biscuit1.jpg', categoryId: biscuits.id },
    { name: 'Biscuit Chocolat Noir', description: 'Biscuit chocolat 70 % cacao.', price: 3.5, imageUrl: 'https://example.com/biscuit2.jpg', categoryId: biscuits.id },
    { name: 'Biscuit Petit Épeautre', description: 'Biscuit au petit épeautre léger.', price: 2.8, imageUrl: 'https://example.com/biscuit3.jpg', categoryId: biscuits.id },
    { name: 'Biscuit Orange Cannelle', description: 'Saveur orange‑cannelle.', price: 3.2, imageUrl: 'https://example.com/biscuit4.jpg', categoryId: biscuits.id },
    { name: 'Biscuit Amande Coco', description: 'Biscuit amande et coco râpée.', price: 3.6, imageUrl: 'https://example.com/biscuit5.jpg', categoryId: biscuits.id },
    // Infusions (5)
    { name: 'Infusion Camomille', description: 'Camomille relaxante.', price: 4.0, imageUrl: 'https://example.com/infusion1.jpg', categoryId: infusions.id },
    { name: 'Infusion Menthe Poivrée', description: 'Menthe poivrée digestive.', price: 4.2, imageUrl: 'https://example.com/infusion2.jpg', categoryId: infusions.id },
    { name: 'Infusion Verveine', description: 'Verveine apaisante.', price: 4.1, imageUrl: 'https://example.com/infusion3.jpg', categoryId: infusions.id },
    { name: 'Infusion Tilleul', description: 'Décoction tilleul bio.', price: 4.3, imageUrl: 'https://example.com/infusion4.jpg', categoryId: infusions.id },
    { name: 'Infusion Hibiscus', description: 'Infusion hibiscus fruitée.', price: 4.5, imageUrl: 'https://example.com/infusion5.jpg', categoryId: infusions.id },
    // Accessoires Bébé Bio (15)
    { name: 'Bavoir Bio en Coton', description: 'Bavoir coton bio doux.', price: 6.0, imageUrl: 'https://example.com/bebe1.jpg', categoryId: accessoires.id },
    { name: 'Gigoteuse Bio 6‑12 mois', description: 'Gigoteuse en coton bio.', price: 25.0, imageUrl: 'https://example.com/bebe2.jpg', categoryId: accessoires.id },
    { name: 'Couverture Bio 75×75 cm', description: 'Couverture tissu biologique.', price: 20.0, imageUrl: 'https://example.com/bebe3.jpg', categoryId: accessoires.id },
    { name: 'Hochet Bois Naturel', description: 'Hochet en bois non traité.', price: 8.0, imageUrl: 'https://example.com/bebe4.jpg', categoryId: accessoires.id },
    { name: 'Anneau de Dentition', description: 'Anneau en silicone bio.', price: 9.0, imageUrl: 'https://example.com/bebe5.jpg', categoryId: accessoires.id },
    { name: 'Peluche Bio', description: 'Peluche coton bio 25 cm.', price: 12.0, imageUrl: 'https://example.com/bebe6.jpg', categoryId: accessoires.id },
    { name: 'Serviette de Bain Bio', description: 'Serviette douce en coton.', price: 15.0, imageUrl: 'https://example.com/bebe7.jpg', categoryId: accessoires.id },
    { name: 'Pyjama Bio 9‑12 mois', description: 'Pyjama coton bio chaud.', price: 18.0, imageUrl: 'https://example.com/bebe8.jpg', categoryId: accessoires.id },
    { name: 'Body Bio Manches Longues', description: 'Body coton bio unisexe.', price: 10.0, imageUrl: 'https://example.com/bebe9.jpg', categoryId: accessoires.id },
    { name: 'Chaussettes Bio (lot de 3)', description: 'Lot de 3 paires.', price: 8.0, imageUrl: 'https://example.com/bebe10.jpg', categoryId: accessoires.id },
    { name: 'Trousse en Lin Bio', description: 'Trousse de toilette en lin bio.', price: 14.0, imageUrl: 'https://example.com/bebe11.jpg', categoryId: accessoires.id },
    { name: 'Jouet Bébé Coton Bio', description: 'Animal doux en coton bio.', price: 11.0, imageUrl: 'https://example.com/bebe12.jpg', categoryId: accessoires.id },
    { name: 'Masque Nuit Bébé', description: 'Masque sommeil délicat.', price: 9.0, imageUrl: 'https://example.com/bebe13.jpg', categoryId: accessoires.id },
    { name: 'Thermomètre Bébé', description: 'Thermo médical bio.', price: 12.0, imageUrl: 'https://example.com/bebe14.jpg', categoryId: accessoires.id },
    { name: 'Coussin Allaitement', description: 'Coussin coton bio.', price: 30.0, imageUrl: 'https://example.com/bebe15.jpg', categoryId: accessoires.id },
  ];

  // Insertion des produits
  await prisma.product.createMany({ data: produits });

  console.log('🪴 Seed terminé avec succès');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
