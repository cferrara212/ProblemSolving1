"use strict"

//Problem Solving Worksheet 1


//1.Reverse a string
// a.Write code that takes a string as input and returns the string reversed
// b.i.e. “Hello” will be returned as “olleH”

                    // let wordToBeReversed ="hello";
                    // let reversedWord = "";

                    // for (let i=wordToBeReversed.length-1; i>=0; i--)
                    // {
                    //     console.log(wordToBeReversed[i]);
                    //     reversedWord+= wordToBeReversed[i];
                    // }

                    // console.log(reversedWord)


// // 2.Capitalize letter
// // a.Write code that takes a string as input and capitalize the first letter of each word. Words will be separated by only one space. i.e. “hello world” should be outputted as “Hello World”

//                 /// declaring variables to be used throughout the capitalization process. and calling in my functions.
//                     let wordsToBeCapitalized= "hello worLd. Glad tO be here!"
//                     let wordsSplitToArray= SplitString(wordsToBeCapitalized);
//                     let newWords = capitalizeEachWordInArray(wordsSplitToArray);
//                     let newString = newWords.join();
//                     console.log=(newString);

                    
//                 ///
//                 /// here I am writing a str.spit function to better understand how string splitting works.
//                     function SplitString(arrayToSplit)
                    
//                     {
//                         arrayToSplit = arrayToSplit.toLowerCase()
//                         let temporarySplitString="";
//                         let splitWords = [];

//                         for(let i = 0; i<arrayToSplit.length; i++)
//                          {
//                              if (arrayToSplit[i] !== " ")
//                              {
//                                  temporarySplitString   += arrayToSplit[i];
//                              }
                            
                             
//                              else if (temporarySplitString.trim())
//                              {
//                                  splitWords.push(temporarySplitString);
//                                  temporarySplitString= ""
                                 
//                              }
                             
                            
                             
//                          }

//                          if(temporarySplitString)
//                          {
//                              splitWords.push(temporarySplitString);
                             
//                          }
//                          return splitWords
//                     }

//                       ////
//                       //// This is the function to capitalize each word in the array created by the split function.

//                     function capitalizeEachWordInArray(wordsToBeCapitalizedArray)
//                     {
//                         for (let i=0; i< wordsToBeCapitalizedArray.length; i++)
//                         {
//                            wordsToBeCapitalizedArray[i]= wordsToBeCapitalizedArray[i].charAt(0).toUpperCase() + wordsToBeCapitalizedArray[i].slice(1);
                         
//                         }
//                         return wordsToBeCapitalizedArray;
//                     }



//                    /////the simple way
//                    /////using built in functions to save time.

//                     let stringToCapitalize = 'this is the easy way';

//                     //split the above string into an array of strings 
//                     //whenever a blank space is encountered
                    
//                     let stringToArray = stringToCapitalize.split(" ");
                    
//                     //loop through each element of the array and capitalize the first letter.
                    
                    
//                     for (let i = 0; i < stringToArray.length; i++) {
//                         stringToArray[i] = stringToArray[i].charAt(0).toUpperCase() + stringToArray[i].slice(1);
                    
//                     }
                    
//                     //Join all the elements of the array back into a string 
//                     //using a blankspace as a separator 
//                     const completedString = stringToArray.join(" ");
//                     console.log=(completedString);
                    
//                     //Outptut: I Have Learned Something New Today


    ///3.Compress a string of characters
    ///a.For example, an input of "aaabbbbbccccaacccbbbaaabbbaaa" would compress to "3a5b4c2a3c3b3a3b3a"

                   // creating variables to use in string compression. must have a string and a sorted string, in case the string given is out of order.

                //    let stringToCompress = "aaaabbbccckkkkeeeiiifuuuuuusss";
                //    let sortedString= stringToCompress.split('').sort().join('');
                   
                //    let compressedString= compressAStringOfCharacters(sortedString);
                //    console.log(compressedString);

                
                   ////
                   //// creating a function to compress the characters in the string.

                //    function compressAStringOfCharacters(charactersToCompress)
                //    {
                        
                //         let charactersCompressed={};
                //        for(let i=0; i<charactersToCompress.length; i++)
                //            {
                //             if(charactersCompressed[charactersToCompress[i]])
                //             {
                //               charactersCompressed[charactersToCompress[i]] += 1;
                //             }
                //             else
                //             {
                //                 charactersCompressed[charactersToCompress[i]]=1;
                //             }
                //            } 
                //            return charactersCompressed;
                //    }




////4.BONUS CHALLENGE: Palindrome
////a.A word, phrase, or sequence that reads the same backward as forward i.e. madam
////b.Write code that takes a user input and checks to see if it is a Palindrome and reports the result




                    ///
                    /// writing variables for palindrom

                    let wordToCheck= "ddkdj";
                    let wordReversed = reverseThisWord(wordToCheck);
                    let isPalindrome = checkIfPalindrome(wordToCheck, wordReversed);
                    
                function reverseThisWord(wordToBeReversed)    
                 {   
                     let wordNowReversed ="";
                    for (let i = wordToBeReversed.length-1; i>=0; i--)
                    {
                       wordNowReversed += wordToBeReversed[i];
                    }
                    return wordNowReversed;
                }
                    console.log(wordReversed);
                    console.log(isPalindrome);


                    function checkIfPalindrome(wordToBeChecked, reversedWordToCheck)
                    {
                        let palindrome;
                      for (let i=0; i<wordToBeChecked.length; i++)
                        {
                            
                             
                                 if (reversedWordToCheck[i] === wordToBeChecked[i])
                                  {
                                      palindrome =true
                                      
                                  }
                                  else
                                  {
                                      palindrome = false
                                      break;
                                  }
                             
                        }
                        return palindrome
                    }

