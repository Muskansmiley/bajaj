export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ is_success: false, message: 'Only POST allowed' });
  }

  const inputData = req.body.data;

  const fullName = 'nishtha_bansal';
  const dob = '29072003';
  const email = 'nishtha@xyz.com';
  const rollNumber = 'ABC123';

  let even_numbers = [];
  let odd_numbers = [];
  let alphabets = [];
  let special_characters = [];
  let sum = 0;
  let concatChars = [];

  inputData.forEach(item => {
    const strItem = item.toString();

    if (/^\d+$/.test(strItem)) {
      const num = parseInt(strItem);
      sum += num;
      (num % 2 === 0 ? even_numbers : odd_numbers).push(strItem);
    } else if (/^[a-zA-Z]+$/.test(strItem)) {
      alphabets.push(strItem.toUpperCase());
      concatChars.push(strItem);
    } else {
      special_characters.push(strItem);
    }
  });

  const reverseConcat = concatChars
    .join('')
    .split('')
    .reverse()
    .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join('');

  const response = {
    is_success: true,
    user_id: `${fullName}_${dob}`,
    email: email,
    roll_number: rollNumber,
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string: reverseConcat
  };

  return res.status(200).json(response);
}
