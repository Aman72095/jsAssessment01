/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFTs
const nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_album,_singer,_medium,_year) {
    const nft = {
        album: _album,
        singer: _singer,
        medium: _medium,
        year: _year
    };
    nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    nftCollection.forEach(nft => {
        console.log("Album: " + nft.album);
        console.log("Singer: " + nft.singer);
        console.log("Medium: " + nft.medium);
        console.log("Year: " + nft.year);
        console.log("---------------------------");
    });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// call your functions below this line

// Mint some NFTs
mintNFT("AKM", "KK", "HINDI", 2009);
mintNFT("UZI", "Arijit", "English", 2014);
mintNFT("M416", "YO YO", "English", 2014);
mintNFT("Pistol", "AR", "Hindi", 2015);

// List all NFTs
listNFTs();

// Get the total supply of NFTs
console.log("Total Supply: " + getTotalSupply());
