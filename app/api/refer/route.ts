callbacks: {
  async signIn({ user, request }) {
    const url = new URL(request.url);
    const ref = url.searchParams.get("ref");

    if (ref) {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          referredBy: ref,
        },
      });

      // Refer bonus
      await prisma.wallet.updateMany({
        where: { userId: ref },
        data: { balance: { increment: 10 } },
      });
    }

    return true;
  },
}
