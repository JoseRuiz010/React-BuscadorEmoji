import emojiList from "../emojiList.json";
export default function EmojisFilter(serachText) {
  if (serachText === "") {
    serachText = "eye";
  }
 // console.log("SE recibio" + serachText);
  return emojiList
    .filter((e) => {
      
        if (e.title.toLowerCase().includes(serachText.toLowerCase())) {
          return true;
        }
      
      return false;
    })
    .slice(0, 25);
}
