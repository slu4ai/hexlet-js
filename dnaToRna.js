// преобразование DNA в RNA
const dnaToRna = (dna) => {
  if (dna === '') {
    return '';
  }

  let i = 0;
  let result = '';
  while (i < dna.length) {
    if (dna[i] === 'A') {
      result = `${result}U`;
    } else if (dna[i] === 'C') {
      result = `${result}G`;
    } else if (dna[i] === 'G') {
      result = `${result}C`;
    } else if (dna[i] === 'T') {
      result = `${result}A`;
    } else if (dna[i] !== 'A' || dna[i] !== 'C' || dna[i] !== 'G' || dna[i] !== 'T') {
      return null;
    }
    i += 1;
  }

  return result;
};
export default dnaToRna;
