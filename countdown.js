export default class Countdown{
    constructor(datefuture){
        this.datefuture = datefuture
    }
    get _actualDate(){
        return new Date
    }
    get _futureDate(){
        return new Date(this.datefuture)
    }
    get _timeStampDiff(){
        return this._futureDate.getTime() - this._actualDate.getTime()
    }
    get days(){
        return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000))
    }
    get hours(){
        return Math.floor(this._timeStampDiff / (60 * 60 * 1000)) % 24
    }
    get minutes(){
        return Math.floor(this._timeStampDiff / ( 60 * 1000)) % 60
    }
    get seconds(){
        return Math.floor(this._timeStampDiff / 1000) % 60
    }
    get total(){
        const days = this.days
        const hours = this.hours
        const minutes = this.minutes 
        const seconds = this.seconds 
        return {
            days,
            hours,
            minutes,
            seconds
        }
    }
}