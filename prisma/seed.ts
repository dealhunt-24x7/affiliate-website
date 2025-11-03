import prisma from "../lib/prisma";

async function main() {
  const u = await prisma.user.upsert({
    where: { email: "demo@dealhunt.test" },
    update: {},
    create: {
      name: "Demo User",
      email: "demo@dealhunt.test",
      image: "",
    },
  });

  await prisma.wallet.upsert({
    where: { userId: u.id },
    update: {},
    create: { userId: u.id, available: 250, pending: 80, withdrawn: 100 },
  });

  console.log("Seed completed");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
