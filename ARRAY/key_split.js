let key_strings1= "KFHFVFFJF5fef5GhRHr6hrh+s4+g4d+hg4dh1dhdhEm4l4";
let key_strings2= "aadfz5f5DEG674FFGDGndfdf245ffKJDHS542SDSF56u";
// GET A aleatoire NUMBER BETWEEN 15 and 25 CARACTERE 
let math = Math.floor(Math.random() * 10000) + 1; 
// exctrat a range caractere at the begining of string text
function keyEncriptDecrypt(key1,key2){
    /**
     * EXTRACT RANGE CARACTER AT THE BEGINING OF EACH KEY STRING
     */
    let extract_start_key1 = key1.slice(0,9);
    let extract_start_key2 = key2.slice(0,9);
    let key1_1to2_start = key1.replace(extract_start_key1,extract_start_key2);
    let key2_1to2_start = key2.replace(extract_start_key2,extract_start_key1);
    console.log(" ORIGINAL KEY1: " +key1 + " ORIGINAL KEY2: " +key2 );

      /**
     * EXTRACT RANGE CARACTER AT THE END OF EACH KEY STRING
     */
      let extract_end_key1 = key1.slice(-10);
      let extract_end_key2 = key2.slice(-10);
      let key1_1to2_end = key1_1to2_start.replace(extract_end_key1,extract_end_key2);
      let key2_1to2_end = key2_1to2_start.replace(extract_end_key2,extract_end_key1);

    /**
     *  EXTRACT RANGE CARACTER AT THE MIDDLE OF EACH KEY STRING
     */
    if ( key1.length%2 == 0  && key2.length%2 == 0 ){
        // KEY STRING ONE
        let middle_key1 = (key1.length)/2;
        let middle_left_key1 = key1.slice(0,middle_key1);
        let middle_right_key1 = key1.slice(-middle_key1);
        let extract_middle_left_key1  = middle_left_key1.slice(-5);
        let extract_middle_right_key1 = middle_right_key1.slice(0,5);
        let extract_middle_key1 = extract_middle_left_key1 + extract_middle_right_key1;
        // KEY STRING TWO
        let middle_key2 = (key2.length)/2;
        let middle_left_key2 = key2.slice(0,middle_key2);
        let middle_right_key2 = key2.slice(-middle_key2);
        let extract_middle_left_key2  = middle_left_key2.slice(-5);
        let extract_middle_right_key2 = middle_right_key2.slice(0,5);
        let extract_middle_key2 = extract_middle_left_key2 + extract_middle_right_key2;
        //
        let key_Encrypt_1 = key1_1to2_end.replace(extract_middle_key1,extract_middle_key2);
        let key_Encrypt_2 = key2_1to2_end.replace(extract_middle_key2,extract_middle_key1);

        console.log("key_Encrypt_1 : " + key_Encrypt_1 );
        console.log("key_Encrypt_2 : " + key_Encrypt_2 );
    //     console.log("middle_right : " + middle_right + " Length: "+ middle_right.length);
    }

 
    // let key1_1to2_end = key1.replace(extract_end_key1,extract_end_key2);
    // let key2_1to2_end = key2.replace(extract_end_key2,extract_end_key1);
    // console.log(" KEY1 : " + key1_1to2_end);
    // console.log(" KEY2 :" + key2_1to2_end);


    // let replace_key_1to2 = extract_begin1.replace(key2);
    // console.log("replace: "+ replace_key_1to2);
    // console.log("extract: " +extract_begin1);
    // return replace_key_1to2;
}

// exctrat a range caractere at the middle of string text
// function extract_middle(key){
    

//  else if (key.length%2 != 0 ){
//     let last_character = key.slice(-1);
//     // Pop the last character
//     let character = key.split("");
//     character.pop();
//     let new_array = character.join("").toString();
//     console.log(new_array);
//     console.log(" Last character : "+ last_character + " new_array.length : " + new_array.length) ;
//     middle = (new_array.length )/2;
//     middle_left = new_array.slice(0,middle);
//     middle_right = new_array.slice(-middle);
//     extract_middle_left  = middle_left.slice(-5);
//     extract_middle_right = middle_right.slice(0,5);
//     extract_middle_key = extract_middle_left + extract_middle_right;
//     let key_restored = middle_left + middle_right + last_character ;

//     console.log("middle_left : " + middle_left +" Length : "+ middle_left.length);
//     console.log("middle_right : " + middle_right + " Length : "+ middle_right.length);
//     console.log(" key restored " + key_restored)
//  }
//     console.log("=========EXTRACT MIDDLE======" + extract_middle_key);
//  return extract_middle_key;
// }

keyEncriptDecrypt(key_strings1,key_strings2)
