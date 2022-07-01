import Post from "./models/post";

export default function createFakeData() {
    const posts = [...Array(40).keys()].map(i => ({
        title: `포스트 #${i}`,
        body:
            `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac dui id nisi fermentum efficitur finibus viverra metus. Aliquam vel aliquam tortor. Curabitur dui tortor, venenatis nec suscipit et, viverra ac sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque mauris nisi, ultricies et tristique nec, venenatis eu magna. In commodo lectus id viverra ultricies. In accumsan turpis quam, eget volutpat odio venenatis sed. Suspendisse orci ex, aliquam pulvinar malesuada vitae, dignissim vitae dolor. Quisque facilisis vel dolor ac feugiat. Donec nulla lorem, fringilla sit amet lacinia vel, commodo scelerisque libero.

        Suspendisse volutpat nulla ac quam sagittis sodales. Duis et dui in massa aliquet scelerisque. Ut placerat ultricies porta. Morbi dignissim, lorem non vulputate mattis, quam nulla placerat neque, vitae lacinia velit neque eu ex. Nulla lorem ante, sodales eget felis nec, aliquam tristique ipsum. In id dui at magna bibendum dignissim et eget lorem. Duis eros justo, vulputate nec tortor vel, tempus pretium felis. Nunc in lorem vel arcu interdum hendrerit. Duis elementum urna vel mauris auctor, id consectetur felis sodales. Aliquam enim turpis, imperdiet nec commodo ut, blandit nec tellus. Nunc maximus felis ut arcu bibendum fermentum eget et ex. Mauris accumsan justo vitae ultricies dignissim.
        
        Nullam nec dapibus mauris. Ut porta dapibus odio, congue condimentum augue tempus vitae. Pellentesque in scelerisque nunc. Praesent nisl purus, hendrerit ut lorem eget, efficitur sodales nisl. Curabitur nec ullamcorper ipsum, et vestibulum nisl. Aliquam pharetra, tellus eu malesuada tincidunt, felis metus cursus nibh, sed blandit.
        `,
        tags: ['가짜', '데이터']
    }));
    Post.insertMany(posts, (err, docs) => {
        console.log(docs);
    })
}