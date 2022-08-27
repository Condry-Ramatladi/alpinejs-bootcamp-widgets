

document.addEventListener('alpine:init', () => {
    Alpine.data('AlpineWidget', function() {
      return {
        name:'',
        greet_m: '',

        usage: '',
        cost: '',
        balanceAirtime: '',

        sent: '',
        longWord: '',
        shortWord: '',
        sumWord:'',

        phoneBill: '',
        phoneData: '',

        greet(name){
            if(this.name != ''){
                this.greet_m = 'Hello ' + this.name;
                this.name ='';
            }
        },

        enoughAirtime(usage, cost){
            //alert('airtime');
            var logd = usage.split(',');
            var smsd = 0;
            var calld = 0;
            var datad = 0;
            for(var i = 0; i < logd.length; i++){
              if(logd[i].includes('sms')){
                 smsd++;
                 }
              else if(logd[i].includes('call')){
                calld++;
              }
              else if(logd[i].includes('data')){
                datad++;
              }
            }
            console.log(calld + " " + smsd + " " + datad);
            var calc = cost - ((1.88*calld) + (0.75*smsd) + (12*datad));
            if(calc <= 0){
              this.balanceAirtime ='R' + Number.parseFloat(0).toFixed(2);
            }
            var total = Number.parseFloat(calc).toFixed(2);
            console.log(total);
            this.balanceAirtime = 'R' + total;
          },

          wordGame(sent){
            var words = sent.split(' ');
            var long = 0;
            var longW = ' ';
            console.log(words);
            for(var i = 0; i < words.length; i++){
              if(words[i].length >= long){
                long = words[i].length;
                longW = words[i];
              }
            }
            this.longWord = longW;

            var short = sent.length;
            var words = sent.split(' ');
            var shortW = ' ';
            console.log(words);
            for(var i = 0; i < words.length; i++){
              if(words[i].length <= short){
                short = words[i].length;
                shortW = words[i];
              }
            }
            this.shortWord = shortW;

            var words = sent.split(' ');
            console.log(words);
            var length = 0;
            for(var i = 0; i < words.length; i++){
              length += words[i].trim().length;
            }
            console.log(length);
            this.sumWord = length;

          },

          totalPhoneBill(data){
            var sdata = data.split(',');
            console.log(sdata);
            var calld = 0;
            var smsd = 0;
            for(var i = 0; i < sdata.length; i++){
              if(sdata[i].includes('sms')){
                smsd++;
              }
              else if(sdata[i].includes('call')){
                calld++;
              }
            }
            console.log(calld +" "+ smsd);
            var total = ((calld*2.75)+(smsd*0.65));
            console.log(Number.parseFloat(total).toFixed(2));
            this.phoneBill = 'R' + Number.parseFloat(total).toFixed(2);
          }
          
      }
    })
})