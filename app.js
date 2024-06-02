let tombol = document.querySelector('#kirim');
let inputFormatNamaMedis = document.querySelector('#formatNamaMedis');
let formatNamaMedis;
let penampilNamaMedis = document.querySelector('.penampilNamaMedis');

let diagnosisPlanKapital = (diagnosisPlan) => {
  let diagnosisPlanHurufKecil = diagnosisPlan.toLowerCase();
  let diagnosisPlanPerKata = diagnosisPlanHurufKecil.split(" ");

  return diagnosisPlanPerKata.map((dp) => {
    if (
      dp === "of"||
      dp === "the" ||
      dp === "dan"||
      dp === "dengan"||
      dp === "serta"||
      dp === "atau"||
      dp === "dari"||
      dp === "on"||
      dp === "pre"||
      dp === "post"||
      dp === "ai"||
      dp === "ec"||
      dp === "s/d"||
      dp === "and"||
      dp === "ke"||
      dp === "dd"||
      dp === "due"||
      dp === "to"||
      dp === "dalam" ||
      dp === "by" ||
      dp === "et" ||
      dp === "di" ||
      dp === "pada" ||
      dp === "ke" ||
      dp === "a" ||
      dp === "at"
    ) {
      return dp;
    } else if (
      dp === "asd" ||
      dp === "vsd" ||
      dp === "tof" ||
      dp === "dcsa" ||
      dp === "afrvr" ||
      dp === "ipc" ||
      dp === "ali" ||
      dp === "te" ||
      dp === "tt" ||
      dp === "la" ||
      dp === "ga" ||
      dp === "umn" ||
      dp === "lmn" ||
      dp === "sdh" ||
      dp === "aml" ||
      dp === "wsd" ||
      dp === "vap" ||
      dp === "clti" ||
      dp === "dm" ||
      dp === "pmo" ||
      dp === "msa" ||
      dp === "ii" ||
      dp === "iii" ||
      dp === "iv" ||
      dp === "vi" ||
      dp === "vii" ||
      dp === "viii" ||
      dp === "ix" ||
      dp === "rosc" ||
      dp === "ckd" ||
      dp === "hd" ||
      dp === "as" ||
      dp === "ar" ||
      dp === "ms" ||
      dp === "mr" ||
      dp === "ps" ||
      dp === "pr" ||
      dp === "ts" ||
      dp === "tr" ||
      dp === "lcc" ||
      dp === "ncc" ||
      dp === "rcc" ||
      dp === "pda" ||
      dp === "dcsa" ||
      dp === "pmo" ||
      dp === "pfo" ||
      dp === "ph" ||
      dp === "tb" ||
      dp === "rhd" ||
      dp === "da" ||
      dp === "de" ||
      dp === "dvt" ||
      dp === "cvi" ||
      dp === "av"
    ) {
      return dp.toUpperCase();
    }
    return dp[0].toUpperCase() + dp.substring(1);
  }).join(" ");
}

tombol.addEventListener('click', () => {
  formatNamaMedis = diagnosisPlanKapital(inputFormatNamaMedis.value);
  penampilNamaMedis.innerHTML = `${formatNamaMedis}<br>`
})
