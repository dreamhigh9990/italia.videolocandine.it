import settings from "./settings.js"
export default {
    getLocale(){
        if(localStorage.getItem('locale') === null){
			localStorage.setItem('locale', 'en');
		}
		return localStorage.getItem('locale');
    },
    h_getDays()
    {
        if(this.getLocale() == 'it')
            var days = ['Lun', 'Mar', 'Mer', 'Giov', 'Ven', 'Sab', 'Dom'];
        else if(this.getLocale() == 'en')
            var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        return days;
    },
    getFilterURL(data){
        let url = '';
        $.each(data, function(key,value) {
            url += (value) ? '&'+key+'='+encodeURI(value) : '';
        });
        return url;
    },
    formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
    },
    parseDate (date) {
        if (!date) return null

        const [day, month, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  check() {
    return axios.post('/auth/check').then(response => {
        return !!response.data.authenticated;
    }).catch(error => {
        return response.data.authenticated;
    });
  },
}