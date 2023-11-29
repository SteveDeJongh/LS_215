// LS215 - Lesson 2 - Acronym

function acronym(string) {
  return string.split(/\W+/).map(word => word[0].toUpperCase()).join('')
}

acronym('Portable Network Graphics');                  // "PNG"
acronym('First In, First Out');                        // "FIFO"
acronym('PHP: HyperText Preprocessor');                // "PHP"
acronym('Complementary metal-oxide semiconductor');    // "CMOS"
acronym('Hyper-text Markup Language');                 // "HTML"

// Alternatively

function acronym(string) {
  string = string.replace(/-/g, ' ');
  return string.split(' ').map(word => word[0].toUpperCase()).join('')
}

// OR

function acronym(string) {
  return string.replace(/-/g, ' ')
               .split(' ')
               .map(word => word[0].toUpperCase())
               .join('');
}