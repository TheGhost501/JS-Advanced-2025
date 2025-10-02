function search() {
   let list = document.querySelectorAll("#towns li");
   let search = document.getElementById("searchText").value;
   let result = document.getElementById("result");
   let matches = 0;

   list.forEach(li => {
      li.style.fontWeight = "normal";
      li.style.textDecoration = "none";
   })


   for (const town of list) {

      if (town.textContent.includes(search)) {
         town.style.fontWeight = "bold";
         town.style.textDecoration = "underline";
         matches++;
      }

   }
   search = "";
   result.textContent = `${matches} matches found`;
}
