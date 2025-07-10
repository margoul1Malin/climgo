import prismadb from '../lib/prismadb';
import bcrypt from 'bcrypt';

async function main() {
  console.log('Mise à jour du mot de passe pour l\'utilisateur existant...');

  const username = 'bcardoso';
  const password = 'SuperPassword';

  // Hacher le mot de passe
  const hashedPassword = await bcrypt.hash(password, 10);

  // Mettre à jour le mot de passe dans la base de données
  const updatedUser = await prismadb.user.update({
    where: { username },
    data: { password: hashedPassword }
  });

  if (updatedUser) {
    console.log('Mot de passe mis à jour avec succès pour l\'utilisateur', username);
  } else {
    console.log('Utilisateur non trouvé ou erreur lors de la mise à jour.');
  }
}

main()
  .catch((e) => {
    console.error('Erreur lors de la mise à jour du mot de passe:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prismadb.$disconnect();
  }); 