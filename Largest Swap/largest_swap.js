function largestSwap(num) {
	return Number(num.toString().split('').reverse().join('')) <= num;
}
