const prismadb = require('../lib/prismadb');
const bcrypt = require('bcrypt');

async function main() {
  console.log('Démarrage du seeding pour l\'utilisateur administrateur...');

  const username = 'admin';
  const password = 'climgo123';

  // Hacher le mot de passe
  const hashedPassword = await bcrypt.hash(password, 10);

  // Vérifier si l'utilisateur existe déjà
  const existingUser = await prismadb.user.findUnique({
    where: { username }
  });

  if (existingUser) {
    console.log('Utilisateur admin existe déjà. Mise à jour du mot de passe...');
    await prismadb.user.update({
      where: { username },
      data: { password: hashedPassword }
    });
    console.log('Mot de passe mis à jour pour l\'utilisateur admin.');
  } else {
    // Créer un nouvel utilisateur
    await prismadb.user.create({
      data: {
        username,
        password: hashedPassword
      }
    });
    console.log('Utilisateur admin créé avec succès.');
  }
}

main()
  .catch((e) => {
    console.error('Erreur lors du seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prismadb.$disconnect();
  }); 