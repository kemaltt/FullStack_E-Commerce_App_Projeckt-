import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const checkAuth = () => {};

  useEffect(() => {
    const token = localStorage.getItem("token");
    token && checkAuth(token);
  }, []);

  const [favs, setFavs] = useState([]);
  const [products, setProducts] = useState([
    {
      title:
        "Custom lighter cover sleeve, Beautiful 3D printed case, Cool lighter Gift",
      description:
        "Custom lighter cover sleeves/case. Sleeves fit standard size BIC lighters. Perfect as a funny gift or for personal use to spice your lighter up a little bit. Give your lighter a little personality with these cool custom lighter sleeves. All these lighter covers are made to order and time will vary based on the amount you purchase. \n" +
        "\n" +
        "Lighter covers/sleeves are great as gifts! Pick some up for your family, friends, or coworkers. These cases come in beautiful vibrant colors and will bring a whole new style to your boring lighter. \n" +
        "\n" +
        "We now have new Sparkle colors available as well. Check them out in our pictures for this ad. \n" +
        "\n" +
        "All lighter cases will have font on both sides unless you request different. These are two sided font prints, so if you want “Ted” it will be on written on both sides of the case. Hope this information helps you with your purchase. \n" +
        "\n" +
        "*All sleeves are tested for quality and fitting before they’re sent out.\n" +
        "\n" +
        "IMPORTANT:\n" +
        "-DO NOT USE ON ALREADY SLEEVED (lighter with sticker) LIGHTERS! \n" +
        "\n" +
        "-Letter customization plays a part in letter size. \n" +
        "\n" +
        "-Be sure to double check your order because we print based on your customization selections ( If you choose all capitals then that what you’ll receive, spelling plays no part in selection). \n" +
        "\n" +
        "- Color (shade/Dark or light) may vary based on batch from filament suppliers. \n" +
        "\n" +
        "\n" +
        "\n" +
        "•These are 3D printed and may show lining\n" +
        "\n" +
        "•Bulk item orders may take longer\n" +
        "\n" +
        "Do NOT leave in direct sunlight \n" +
        "Lighters are NOT included \n" +
        "\n" +
        "\n" +
        "These cases are custom made/designed by me and have no affiliation with BIC lighters at all! \n" +
        "\n" +
        "\n" +
        "No returns nor refunds \n" +
        "Please contact me if you have any issues, questions or concerns.\n" +
        "\n" +
        "\n" +
        "\n" +
        "Thank you!",
      quantity: 17,
      num_favorers: 606,
      tags: [
        "beautiful 3D",
        "art collectibles",
        "groomsmen gifts",
        "gifts mementos",
        "custom bic lighter",
        "Bic custom lighter",
        "cool lighters",
        "custom lighter",
        "Personalized lighter",
        "Case sleeve holder",
        "aesthetic accessory",
        "custom engraved",
        "designer lighter",
      ],
      processing_min: 1,
      processing_max: 3,
      price: 5,
      img: "https://i.etsystatic.com/15639613/r/il/86c4d5/3459393780/il_fullxfull.3459393780_d5s3.jpg",
      onSale: true,
      taxonomy_id: 1,
    },
    {
      title:
        "Custom Rose Gold Birthday Photo Magnets, Personalized Gift, First Birthday Favors, Baby Picture Frames, Birthday Party Gifts, Birthday Gifts",
      description:
        "Berel Design offers the best quality with these affordable Acrylic 1st Birthday Gifts.\n" +
        "\n" +
        "Here are a few things you might want to know:\n" +
        "If you buy 1 from this listing, it includes 10 Birthday Gifts.\n" +
        "The product size is about 10 cm and the picture area is 5 cm. Sizes may vary according to different names. For special measurement information, you can contact us via Etsy convo.\n" +
        "If you want larger or smaller size, please let us know. We can make a special order for you.\n" +
        "\n" +
        "All of our favors are personalized. We can write whatever you want on these mirrors.\n" +
        "\n" +
        "📌Would you like to use your own picture?\n" +
        "There is a mirror surface in the frame area. We stick pictures into frames. We use sticky paper for printing. If you would like to use it your own, you should print the pictures on sticky paper. \n" +
        "Or if you want to use the real picture format, you can use any glue to stick the pictures.\n" +
        "Please note that corner figure mirrors will be sent separately if you prefer to use your own images. You will need to apply yourself.\n" +
        "\n" +
        "📌The shapes of the corner mirrors are round tag, oval, rectangle, hexagon, unicorn, baseball ball, flower, balloon, airplane, hot air balloon, wings, deer, star, cloud, crown, tiara, elephant, zebra, heart, teddy bear, butterfly, lion, carousel, swan, horse and bow. Please add the image you want to choose for your order, on the personalization section.\n" +
        "📌Flower colors are, Navy Blue, Baby Blue, Mint Green, Dark Green, Pink, Yellow, Gray, Red, Black, White, Purple, Black, Burgundy, Gold.\n" +
        "\n" +
        "There are magnets behind the picture frames that you can use on the fridge, refrigerator or magnetic surfaces.\n" +
        "You can choose your mirror color preference from the listing options as gold, silver or rose gold.\n" +
        "\n" +
        "Please make sure to let us know the customization message you want in the notes to seller section at checkout.\n" +
        "If no messages are received, we&#39;ll assume none were requested and your item will be shipped plain.\n" +
        "Our products are special favors for your guests for your special days.\n" +
        "\n" +
        "\n" +
        "Our First Birthday Gifts are an unforgettable decor for your memories.\n" +
        "\n" +
        "Acrylic Party Favors are a great way to thank everyone for attending your event! These uniquely designed and created Party Favors are birthday party themed. These 1st Birthday Party Items are an addition you won&#39;t want to miss at any stylish event.\n" +
        "\n" +
        "Special favors for your guests on your special days. You can use these Gifts on your birthday, baby shower, special days and special occasions.\n" +
        "\n" +
        "Acrylic and laser engraved, no printing. Engraving/etching is a process in which designs are burned onto the surface of a piece of material. The engraving is transparent transparent, not colored.\n" +
        "\n" +
        "Please beware of imitators. We offer the highest quality at affordable prices. There are other pages that copy our designs and put lower prices on lower quality items. Please be sure of the quality of the product when purchasing, even if you have ordered from another store.\n" +
        "\n" +
        "SHIPPING and RETURN\n" +
        "Please consider the processing time. Since these are special products, there is a preparation process.\n" +
        "Average delivery time is 2-5 days. There may be delay due to customs.\n" +
        "Sometimes delivery may take up to 7-10 days depending on your area.\n" +
        "\n" +
        "Please note that no refunds will be made for delays caused by the carrier.\n" +
        " Please always place a few days before when ordering to avoid late shipments or other problems.\n" +
        "\n" +
        "\n" +
        "If you want to take a look at our other products:\n" +
        "https://www.etsy.com/shop/BerelDesignFavors",
      quantity: 5976,
      num_favorers: 827,
      tags: [
        "Birthday Favors",
        "Custom Birthday",
        "Custom Favors",
        "First Birthday",
        "First Birthday Favor",
        "Picture Frames",
        "Birthday Party Gifts",
        "Birthday Party",
        "Birthday Gifts",
        "Birthday Theme Gifts",
        "Rose Gold Favors",
        "Personalized Gift",
        "photo magnets",
      ],
      processing_min: 6,
      processing_max: 8,
      price: 3.7,
      img: "https://i.etsystatic.com/19220200/r/il/2ecb88/3515475470/il_fullxfull.3515475470_fjhp.jpg",
      onSale: true,
      taxonomy_id: 1,
    },
    {
      title: "Softball Mom Black PNG, Sublimation Design Downloads",
      description:
        "This item is a digital download only and can be downloaded after purchase.\n" +
        "\n" +
        "&gt;&gt;NO physical item will be sent or mailed&lt;&lt;\n" +
        "**This is PNG FILE - NOT an SVG for cutting.**\n" +
        "\n" +
        "----------------------------------------------------------------\n" +
        "WHAT YOU WILL RECEIVE:\n" +
        "---------------------------------------------------------------\n" +
        "\n" +
        "✮ 1 PNG files with transparent background\n" +
        "\n" +
        "✮ 300dpi\n" +
        "\n" +
        "**This is PNG FILE - NOT an SVG for cutting.**\n" +
        "\n" +
        "\n" +
        "This PNG is great for creating t-shirts, mugs, sublimation, scrapbooking, pillows, framed prints, Cards\n" +
        "\n" +
        "\n" +
        "REFUNDS ARE NOT AVAILABLE ON DIGITAL DOWNLOADS.\n" +
        "\n" +
        "----------------------------------------------------------------\n" +
        "Terms of Use:\n" +
        "---------------------------------------------------------------\n" +
        "\n" +
        "Designs are for personal/small businesses only. You may use our designs to create physical end product to sell (shirt, bag, mug, tumbler, cup, etc.) Your product must be made by you.\n" +
        "\n" +
        "*SELLING TRANSFERS:\n" +
        "\n" +
        "You MUST purchase an extended license if you wish to sell our design as Screen print transfers, Sublimation transfers or similar printed products\n" +
        "\n" +
        "There are 2 options for our license:\n" +
        "\n" +
        "- Single Design License (Design Sold Separately) :$7.5\n" +
        "https://www.etsy.com/listing/958228646/\n" +
        "\n" +
        "- Whole Shop License (Design Sold Separately): $62.00\n" +
        "https://www.etsy.com/listing/972202751/\n" +
        "\n" +
        "\n" +
        "you MAY NOT:\n" +
        "✮ Shared, Distributed or Resold\n" +
        "✮ use all or part of any of my designs to create new designs to resell in any digital format\n" +
        "✮ Upload the files to print on demand sites, such as Zazzle, printful, spoonflower, Amazon Merch etc.",
      quantity: 519,
      num_favorers: 116,
      tags: [],
      processing_min: null,
      processing_max: null,
      price: 3.7,
      img: "https://i.etsystatic.com/23635462/r/il/b871bb/3699451970/il_fullxfull.3699451970_ix7z.jpg",
      onSale: true,
      taxonomy_id: 3,
    },
    {
      title: "Fumikage Tokoyami Mask Template",
      description:
        "My Hero Academia - Fumikage Tokoyami - Template only - This is only the front and top portion of his head for an very quick an easy build. \n" +
        "\n" +
        "Modified from a 3D file using Pepakura and exported, I created a PDF that has the front of his face for anyone that may want to create this character.  This format is to be laid to foam, it is not a paper model. \n" +
        "\n" +
        "I used 6mm foam to create mine and simply put an elastic strip along the back to hold the mask to my face.",
      quantity: 396,
      num_favorers: 1672,
      tags: [
        "my hero academia",
        "fumikage",
        "tokoyami",
        "mask",
        "cosplay",
        "foam",
        "template",
        "pepakura",
      ],
      processing_min: null,
      processing_max: null,
      price: 1,
      img: "https://i.etsystatic.com/10471735/r/il/890990/1731539572/il_fullxfull.1731539572_lkh0.jpg",
      onSale: true,
      taxonomy_id: 3,
    },
    {
      title:
        "Bunny Bucks - Easter Egg Stuffers, egg filler, Easter basket stuffer, Kids Reward Coupons, Easter Basket Ideas, Printable, Coupons for Kids",
      description:
        "Move over Carrot Cash, BUNNY BUCKS is here!\n" +
        "\n" +
        "Perfect for Easter Egg hunts or adding to Easter Baskets. These fun downloadable printable coupons are a fun way to celebrate the holiday without spending extra money on toys and candy. \n" +
        "\n" +
        "\n" +
        "You will receive one downloadable PDF that can be printed as many times as needed. \n" +
        "\n" +
        "There are 8 reward coupons on one 8.5x11 page. One page has 8 filled-in coupons, the other page is blank. There is also an Ink Friendly version.\n" +
        "\n" +
        "Simply trim in half vertically and then in between each coupon.\n" +
        "\n" +
        "\n" +
        "Looking to add something more?? Hop over to amazon or any craft store and get self-Adhesive Scratch off stickers and cover up the rewards. When they open the reward they will have to scratch off to see what the surprise is!\n" +
        "\n" +
        "\n" +
        "How it works:\n" +
        "1. Purchase this listing\n" +
        "2. You will immediately be able to download your reward coupons \n" +
        "Link to download provided in email from Etsy and in your account under &quot;purchases and reviews&quot;\n" +
        "3. Print as many copies as you&#39;d like at any time once downloaded\n" +
        "\n" +
        "Comes with:\n" +
        "• one version with 8 already filled in reward coupons\n" +
        "• one blank version so you can create your own rewards\n" +
        "=\n" +
        "\n" +
        "*These Bunny Bucks are for personal use only. Original design and copyright belong to glowinthedarkblankets",
      quantity: 967,
      num_favorers: 34,
      tags: [
        "Easter Basket Ideas",
        "East Basket Stuffer",
        "East Bunny Cash",
        "Carrot Cash",
        "Bunny Bucks",
        "easter egg hunt",
        "easter for kids",
        "kid coupons",
        "easter egg filler",
        "kid reward ticket",
        "kids easter ideas",
        "Easter egg stuffer",
        "non candy easter",
      ],
      processing_min: null,
      processing_max: null,
      price: 2.99,
      img: "https://i.etsystatic.com/26703332/r/il/eecc5c/3768833625/il_fullxfull.3768833625_qo5z.jpg",
      onSale: true,
      taxonomy_id: 3,
    },
    {
      title:
        "Vintage Goldtone Mickey Necklace/chain/necklace/costume jewelry/gold/vintage/goldtone/mickey mouse/disney",
      description:
        "Vintage goldtone Disney Mickey Mouse necklace. I don&#39;t know if it came this way but there are 2 thin goldtone metal Mickey pendants on a chain. Both are exactly the same and marked &quot;Disney&quot;. This is a dainty, lightweight piece.\n" +
        "\n" +
        "In good condition with some wear and patina. The chain has definitely faded and darkened. There is some plating wear.\n" +
        "\n" +
        "Chain measures 18&quot; long.\n" +
        "Pendants are 7/8&quot; x 7/8&quot;.",
      quantity: 1,
      num_favorers: 0,
      tags: [
        "Necklace",
        "chain",
        "chain necklace",
        "costume jewelry",
        "gold chain",
        "goldtone",
        "Disney",
        "Disney jewelry",
        "Mickey",
        "mickey mouse",
        "Mouse",
        "Animal jewelry",
      ],
      processing_min: 1,
      processing_max: 3,
      price: 2.99,
      img: "https://i.etsystatic.com/16809637/r/il/902e5e/3859407945/il_fullxfull.3859407945_lxw5.jpg",
      onSale: true,
      taxonomy_id: 4,
    },
    {
      title:
        "36&quot; Acrylic Custom name sign wall decor nursery room decoration backdrop",
      description:
        "Custom signs are all the rage. Dress up your cake table, backdrop, bar, party, business, office, nursery, or bedroom with our custom acrylic signs. Our beautiful signs can transition from your baby shower to the nursery for an added personal touch, or from your party to your room. Whatever the occasion or theme, nothing makes a statement like a custom sign! \n" +
        "\n" +
        "6”-24” signs available here: \n" +
        "https://etsy.me/2r7uZOR \n" +
        "\n" +
        "48” sign available here:\n" +
        "https://etsy.me/30UmA0F \n" +
        "\n" +
        "We recommend ordering ONE sign per word/name. Contact us for multiple word signs. For example “Mr. & Mrs. Jones” “Happy Birthday Emily”. \n" +
        "\n" +
        "All signs will be in one piece. For example if you order Skylar Gray it will be cut as “SkylarGray”so all characters touch. If you would like them as separate pieces, please message shop and let us know.  All lowercase &quot;i&quot;s and &quot;j&quot;s unless otherwise requested will be connected. \n" +
        "Please message shop with font selection at checkout \n" +
        "\n" +
        "Name will be scaled to the selected width. Height will vary depending on number of characters, font style, etc.\n" +
        "\n" +
        "Don’t see exactly what you want? Please Request a Custom Order, and we’ll work together to create something magical. \n" +
        "\n" +
        "MATERIALS -\n" +
        "Our color and mirror acrylic is 1/8” thick. All signs that are 36” and larger come with a 1/8” wood backing. \n" +
        "                       \n" +
        "MIRROR COLOR - Mirror acrylic create an elegant and luxurious feel for any decor. Choose from gold or silver, pink, and Blue.\n" +
        "\n" +
        "SOLID COLORS - White and Black acrylic \n" +
        "Had a different color in mind? Message shop for available options. \n" +
        "\n" +
        "A list of fonts are provided in the photos. Please submit font # selection with personalization details. Want a font you don’t see listed? Let us know what you would like and we will work together to create the sign in the font you like. If no font is selected, we will attempt to contact you. If we do not get a response, we will send you the sign in the font pictured on the cover photo. Conversations— you will be notified by email from Etsy, however, responses must be made through Etsy Messaging for us to receive them. Conversations— you will be notified by email from Etsy, however, responses must be made through Etsy Messaging for us to receive them.\n" +
        "\n" +
        "Care Instructions:\n" +
        "*acrylic is fragile. Always handle with care.\n" +
        "*This is not a toy; keep away from children\n" +
        "*acrylic is easy to scratch and break causing sharp corners. Mirror acrylic has a grey backing. It can easily scratch from front and back. \n" +
        "*To clean: wash with mild soap and water. Dry with soft cloth. \n" +
        "*please note that all items are handmade and slight variations may \n" +
        "\n" +
        "\n" +
        "It is the consumers responsibility to read all product descriptions and care instructions",
      quantity: 175,
      num_favorers: 59,
      tags: [
        "custom baby blanket",
        "wedding sign",
        "custom nursery sign",
        "nursery name sign",
        "name for backdrop",
        "gold acrylic sign",
        "backdrop name sign",
        "mirror name sign",
        "mirrored name sign",
        "custom acrylic sign",
        "name sign",
        "custom name sign",
        "acrylic name sign",
      ],
      processing_min: 5,
      processing_max: 10,
      price: 135,
      img: "https://i.etsystatic.com/17146808/r/il/15136a/2081919335/il_fullxfull.2081919335_rzrt.jpg",
      onSale: true,
      taxonomy_id: 4,
    },
    {
      title:
        "Winston Bishop Card, Prank Sinatra Greeting Card, Birthday Card, Coworker Card, Funny Card, All Occasion Card, New Girl Card, TV Show Card",
      description:
        "CARD:\n" +
        "WINSTON BISHOP / PRANK SINATRA\n" +
        "\n" +
        "• Card for: ALL OCCASIONS\n" +
        "• Blank inside\n" +
        "• Comes with a high-quality Kraft Brown envelope.\n" +
        "• Printed and shipped from Long Beach, CA.\n" +
        "\n" +
        "MATERIAL & PACKAGING:\n" +
        "- Printed on premium, heavy cardstock. \n" +
        "- Card measures 4.25&quot; x 5.5&quot; inches folded (A2)\n" +
        "- Blank inside for your personal message.\n" +
        "- Includes a 4.6&quot; x 6.3&quot;  envelope for your card.\n" +
        "- Card wrapped in a protective cellophane sleeve as well.\n" +
        "- Ships in a sturdy, rigid envelope so your card(s) arrives safe and sound!\n" +
        "\n" +
        "SHIPPING:\n" +
        "I offer free shipping on most of my greeting cards!\n" +
        "\n" +
        "BUNDLE DEALS:\n" +
        "If you’d like a good deal, be sure to check out my listing for bundles of 3 OR 5 cards at  a special rate. Shipping is also free.\n" +
        "ABOUT THE SHOP\n" +
        "All of the greeting cards and coloring books are illustrated by me in hopes to have more fun + modern paper goods. Need a different quantity? Interested in a personalized message? Simply send me a message and I’ll be happy to work with you!\n" +
        "\n" +
        "FOLLOW US ON INSTAGRAM\n" +
        "IG: @readysetgoghpaperco",
      quantity: 47,
      num_favorers: 269,
      tags: [
        "winston bishop",
        "prank sinatra",
        "new girl",
        "winston card",
        "new girl card",
        "winston bishop card",
        "new girl birthday",
        "winston birthday",
        "funny birthday card",
        "funny greeting card",
        "new girl tv show",
        "coworker birthday",
        "lamorne morris",
      ],
      processing_min: 1,
      processing_max: 3,
      price: 5.65,
      img: "https://i.etsystatic.com/25184565/r/il/750ee8/2842155801/il_fullxfull.2842155801_50lq.jpg",
      onSale: true,
      taxonomy_id: 4,
    },
    {
      title:
        "Fairy Garden Wood & Stone Pathway Walkway, Miniature Garden Decor, Dollhouse Miniatures",
      description:
        "This unique faux stone and wood curved walkway will be a nice addition to your fairy garden or miniature garden.  Different colors of flowers also dot the pathway .\n" +
        "\n" +
        "Approximate Size: 5&quot; long x 2&quot; wide\n" +
        "\n" +
        "Materials: Resin\n" +
        "\n" +
        "This listing is only for the items described in the title and description. \n" +
        "\n" +
        "🏠  To browse our shop for more fairy garden accessories and miniatures click here:\n" +
        "\n" +
        "https://www.etsy.com/shop/onlyinminiature\n" +
        "\n" +
        "🚑  This item is a choking risk for small children. This item is only sold as an adult collectible for decorative purposes.",
      quantity: 14,
      num_favorers: 41,
      tags: [
        "fairy garden pathway",
        "stone pathway",
        "fairy pathway",
        "garden decor",
        "fairy accessories",
        "garden accessories",
        "miniature garden",
        "fairy garden",
        "fairy",
        "fairy garden supply",
        "dollhouse miniatures",
        "walkway",
      ],
      processing_min: 1,
      processing_max: 2,
      price: 6.49,
      img: "https://i.etsystatic.com/19718282/r/il/e0625c/3207056750/il_fullxfull.3207056750_dkfy.jpg",
      onSale: true,
      taxonomy_id: 4,
    },
  ]);

  const addFav = (id) => {
    const toAdd = products.filter((el) => el.quantity == id);
  };

  return (
    <UserContext.Provider value={{ products, isAuthenticated }}>
      {" "}
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
