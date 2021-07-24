export default {
  methods: {
    currency(price) {
      const n = Number(price);
      return `NT $${n.toFixed(0).replace(/./g, (c, i, a) => {
        const currency = i && c !== '.' && (a.length - i) % 3 === 0 ? `, ${c}`.replace(/\s/g, '') : c;
        return currency;
      })}`;
    },
    unixTimeToDate(unixTime, format = 'yyyy/MM/DD') {
      return this.$moment(unixTime).format(format);
    },
  },
};
