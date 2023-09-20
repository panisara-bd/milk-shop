import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const productsByType: Record<string, Array<{ name: string, storage: number }>> = {
  'Cashew milk': [
    { name: "Dillion's unequaled cashew milk", storage: 99 },
    { name: "Monet's powerful cashew milk", storage: 27, },
    { name: "Jonah's aware cashew milk", storage: 79, },
    { name: "Christa's squealing cashew milk", storage: 100, },
    { name: "Judith's orange cashew milk", storage: 85, },
    { name: "Kristian's wealthy cashew milk", storage: 11, },
    { name: "Sheldon's tasteless cashew milk", storage: 80, },
    { name: "Jaeden's cooing cashew milk", storage: 33, },
    { name: "Gaven's early cashew milk", storage: 36, },
    { name: "Nehemiah's wealthy cashew milk", storage: 35, },
    { name: "Felicity's second cashew milk", storage: 76, },
    { name: "Elliot's voiceless cashew milk", storage: 87, },
    { name: "Zain's wealthy cashew milk", storage: 71, }
  ],
  'Pea milk': [
    { name: "Julianne's relevant pea milk", storage: 33, },
    { name: "Tea's wide pea milk", storage: 40, },
    { name: "Korbin's open pea milk", storage: 94, },
    { name: "Judith's steady pea milk", storage: 32, },
    { name: "Kasey's painful pea milk", storage: 62, },
    { name: "Harlie's squealing pea milk", storage: 47, },
    { name: "Elliot's unbiased pea milk", storage: 48, },
    { name: "Kristian's bumpy pea milk", storage: 33, },
    { name: "Cora's loose pea milk", storage: 70, },
    { name: "Joan's full pea milk", storage: 67, }
  ],
  'Walnut milk': [
    { name: "Macie's broad walnut milk", storage: 23, },
    { name: "Gaven's numberless walnut milk", storage: 89, },
    { name: "Stephen's torpid walnut milk", storage: 26, },
    { name: "Korbin's fearful walnut milk", storage: 27, },
    { name: "Deangelo's onerous walnut milk", storage: 57, },
    { name: "Lincoln's scared walnut milk", storage: 71, },
    { name: "Duane's typical walnut milk", storage: 89, },
    { name: "Michele's alive walnut milk", storage: 25, },
    { name: "Lance's steady walnut milk", storage: 59, }
  ],
  'Rice milk': [
    { name: "Christa's fearful rice milk", storage: 46, },
    { name: "Tea's scientific rice milk", storage: 15, },
    { name: "Dillion's rough rice milk", storage: 56, },
    { name: "Kasey's wide rice milk", storage: 54, },
    { name: "Joshua's existing rice milk", storage: 73, },
    { name: "Karlee's painful rice milk", storage: 55, },
    { name: "Judith's rotten rice milk", storage: 43, },
    { name: "Johnny's quickest rice milk", storage: 41, }
  ],
  'Coconut milk': [
    { name: "Shakayla's loose coconut milk", storage: 82, },
    { name: "Jean's scared coconut milk", storage: 25, },
    { name: "Brittney's unbiased coconut milk", storage: 96, },
    { name: "Catrina's fallacious coconut milk", storage: 54, },
    { name: "Kristian's early coconut milk", storage: 35, }
  ],
  'Soy milk': [
    { name: "Duane's salty soy milk", storage: 24, },
    { name: "Jocelyn's rough soy milk", storage: 25, },
    { name: "Benjamin's taboo soy milk", storage: 87, },
    { name: "Quincy's whole soy milk", storage: 10, },
    { name: "Marion's torpid soy milk", storage: 41, },
    { name: "Karlee's rough soy milk", storage: 99, },
    { name: "Samuel's broad soy milk", storage: 33, },
    { name: "Joan's numberless soy milk", storage: 98, },
    { name: "Kristian's divergent soy milk", storage: 24, }
  ],
  'Hemp milk': [
    { name: "Deangelo's rotten hemp milk", storage: 59, },
    { name: "Jean's wide hemp milk", storage: 90, },
    { name: "Dillion's taboo hemp milk", storage: 58, },
    { name: "Jaquez's unequaled hemp milk", storage: 76, },
    { name: "Kasey's quickest hemp milk", storage: 4, },
    { name: "Kentrell's loose hemp milk", storage: 79, },
    { name: "Nehemiah's salty hemp milk", storage: 4, },
    { name: "Jonah's second hemp milk", storage: 26, },
    { name: "Tea's strong hemp milk", storage: 19, },
    { name: "Jonah's early hemp milk", storage: 44, },
    { name: "Stephen's wealthy hemp milk", storage: 34, },
    { name: "Rodney's relevant hemp milk", storage: 56, },
    { name: "Jonah's bumpy hemp milk", storage: 72, },
    { name: "Sheldon's tasteless hemp milk", storage: 4, }
  ],
  'Almond milk': [
    { name: "Cora's early almond milk", storage: 58, },
    { name: "Catrina's fallacious almond milk", storage: 62, },
    { name: "Jessi's unbiased almond milk", storage: 76, },
    { name: "Jessalyn's fallacious almond milk", storage: 65, },
    { name: "Judith's bumpy almond milk", storage: 66, },
    { name: "Elliot's recent almond milk", storage: 50, },
    { name: "Jedidiah's early almond milk", storage: 49, },
    { name: "Kentrell's rough almond milk", storage: 40, },
    { name: "Tyquan's wholesale almond milk", storage: 21, },
    { name: "Tea's alive almond milk", storage: 55, },
    { name: "Nehemiah's open almond milk", storage: 23, }
  ],
  'Oat milk': [
    { name: "Kristian's quickest oat milk", storage: 37, },
    { name: "Dominik's fearful oat milk", storage: 25, },
    { name: "Chandler's full oat milk", storage: 32, },
    { name: "Judith's quickest oat milk", storage: 84, },
    { name: "Joshua's rotten oat milk", storage: 15, },
    { name: "Jedidiah's cumbersome oat milk", storage: 16, },
    { name: "Karlee's tan oat milk", storage: 39, },
    { name: "Jaquez's whole oat milk", storage: 50, }
  ],
  'Macadamia milk': [
    { name: "Joshua's full macadamia milk", storage: 44, },
    { name: "Stephen's fearful macadamia milk", storage: 100, },
    { name: "Kentrell's scientific macadamia milk", storage: 1, },
    { name: "Catrina's aware macadamia milk", storage: 64, }
  ],
  'Whole milk': [
    { name: "Kentrell's unequaled whole milk", storage: 51, },
    { name: "Dominik's alive whole milk", storage: 97, },
    { name: "Christa's wealthy whole milk", storage: 84, },
    { name: "Lucero's wholesale whole milk", storage: 46, },
    { name: "Johnny's second whole milk", storage: 54, },
    { name: "Dominik's rough whole milk", storage: 83, },
    { name: "Benjamin's scared whole milk", storage: 4, },
    { name: "Kerry's unbiased whole milk", storage: 21, }
  ]
}

async function main() {
  await Promise.all(Object.entries(productsByType).map(async ([productType, products]) => {
    await prisma.productType.upsert({
      where: { name: productType },
      update: {},
      create: {
        name: productType,
        products: {
          create: products
        }
      }
    })
  }));
}

main()
.then(async () => {
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})