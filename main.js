let para="Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the 'small' ideas of individual sentences to a 'bigger' idea, paragraph structure is essential to any writing for organization, flow, and comprehension. Students have a lot of questions when it comes to writing a paragraph: How many sentences should you use? How do you transition within a paragraph? When do you end a paragraph? Etc. Below we explain everything you need to know about paragraph structure to write like an expert, including several paragraph examples.";
console.log('Total sentences count: ' + para.split('.').length); //Total sentences count:
console.log('Total words count: ' + para.length);//Total words count:
function WordCount(str) { 
    return str.split(" ").length;
  }
console.log('Total char count: ' +WordCount('Total char count: ' + para));//Total char count:
var count = (para.match(/paragraph/gi) ).length;
console.log('No of appearance of "paragraph": ' + count);//No of appearance of 'paragraph':
var cha=(para.match(/[.,":?*(){}|!$#&+~@%_\-=\[\]']/g)).length;
console.log('No of special characters:' + cha);//No of special characters:
var par=para.replace(/paragraph/gi,'para');
console.log('Replacing paragraph as para:   '+par);//Replacing paragraph as para:   
var par1=para.split(".").slice(1,para.split(".").length);
console.log('slicing paragraph from 2nd sentense:    '+ par1);//slicing paragraph from 2nd sentense:   
