class Subject {
	constructor() {
		this.observers = [];
	}
	
	addObserver(observer) {
		this.observers.push(observer);
	}
	
	notify(ev=0) {
		for(let i=0; i<this.observers.length;i++) {
			this.observers[i].onNotify(ev);
		}
	}
}