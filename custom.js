'use strict'

const SA = document.querySelector('#SA')
const saContent = document.querySelector('.sa-content')
const AE = document.querySelector('#AE')
const aeContent = document.querySelector('.ae-content')
const OM = document.querySelector('#OM')
const omContent = document.querySelector('.om-content')
const YE = document.querySelector('#YE')
const yeContent = document.querySelector('.ye-content')
const IL = document.querySelector('#IL')
const PS = document.querySelector('#PS')
const ilpsContent = document.querySelector('.ilps-content')
const JO = document.querySelector('#JO')
const joContent = document.querySelector('.jo-content')
const EG = document.querySelector('#EG')
const egContent = document.querySelector('.eg-content')
const SY = document.querySelector('#SY')
const syContent = document.querySelector('.sy-content')
const LB = document.querySelector('#LB')
const lbContent = document.querySelector('.lb-content')
const selectColor = document.querySelector('.map-select')

window.addEventListener('resize', function () {
	if (window.innerWidth < 1200) {
		saContent.style.opacity = '1'
		aeContent.style.opacity = '1'
		omContent.style.opacity = '1'
		yeContent.style.opacity = '1'
		ilpsContent.style.opacity = '1'
		joContent.style.opacity = '1'
		egContent.style.opacity = '1'
		syContent.style.opacity = '1'
		lbContent.style.opacity = '1'
	} else {
		saContent.style.opacity = '0'
		aeContent.style.opacity = '0'
		omContent.style.opacity = '0'
		yeContent.style.opacity = '0'
		ilpsContent.style.opacity = '0'
		joContent.style.opacity = '0'
		egContent.style.opacity = '0'
		syContent.style.opacity = '0'
		lbContent.style.opacity = '0'
	}
})
SA.addEventListener('click', function () {
	saContent.style.transition = '2s'
	aeContent.style.transition = '0s'
  omContent.style.transition = '0s'
	yeContent.style.transition = '0s'
	ilpsContent.style.transition = '0s'
	joContent.style.transition = '0s'
	egContent.style.transition = '0s'
	syContent.style.transition = '0s'
	lbContent.style.transition = '0s'
	saContent.style.opacity = '1'
	aeContent.style.opacity = '0'
	omContent.style.opacity = '0'
	yeContent.style.opacity = '0'
	ilpsContent.style.opacity = '0'
	joContent.style.opacity = '0'
	egContent.style.opacity = '0'
	syContent.style.opacity = '0'
	lbContent.style.opacity = '0'
	// SA.style.fill = '#FFCB1B'
	// AE.style.fill = '#FFFFFF'
	// OM.style.fill = '#FFFFFF'
	// YE.style.fill = '#FFFFFF'
	// IL.style.fill = '#FFFFFF'
	// PS.style.fill = '#FFFFFF'
	// JO.style.fill = '#FFFFFF'
	// EG.style.fill = '#FFFFFF'
	// SY.style.fill = '#FFFFFF'
	// LB.style.fill = '#FFFFFF'
	SA.classList.remove('st0')
	SA.classList.add('map-select')
	AE.classList.add('st0')
	AE.classList.remove('map-select')
	OM.classList.add('st0')
	OM.classList.remove('map-select')
	YE.classList.add('st0')
	YE.classList.remove('map-select')
	IL.classList.add('st0')
	IL.classList.remove('map-select')
	PS.classList.add('st0')
	PS.classList.remove('map-select')
	JO.classList.add('st0')
	JO.classList.remove('map-select')
	EG.classList.add('st0')
	EG.classList.remove('map-select')
	SY.classList.add('st0')
	SY.classList.remove('map-select')
	LB.classList.add('st0')
	LB.classList.remove('map-select')
})
AE.addEventListener('click', function () {
	saContent.style.transition = '0s'
	aeContent.style.transition = '2s'
  omContent.style.transition = '0s'
	yeContent.style.transition = '0s'
	ilpsContent.style.transition = '0s'
	joContent.style.transition = '0s'
	egContent.style.transition = '0s'
	syContent.style.transition = '0s'
	lbContent.style.transition = '0s'
	saContent.style.opacity = '0'
	aeContent.style.opacity = '1'
	omContent.style.opacity = '0'
	yeContent.style.opacity = '0'
	ilpsContent.style.opacity = '0'
	joContent.style.opacity = '0'
	egContent.style.opacity = '0'
	syContent.style.opacity = '0'
	lbContent.style.opacity = '0'
	// SA.style.fill = '#FFFFFF'
	// AE.style.fill = '#FFCB1B'
	// OM.style.fill = '#FFFFFF'
	// YE.style.fill = '#FFFFFF'
	// IL.style.fill = '#FFFFFF'
	// PS.style.fill = '#FFFFFF'
	// JO.style.fill = '#FFFFFF'
	// EG.style.fill = '#FFFFFF'
	// SY.style.fill = '#FFFFFF'
	// LB.style.fill = '#FFFFFF'
	SA.classList.add('st0')
	SA.classList.remove('map-select')
	AE.classList.remove('st0')
	AE.classList.add('map-select')
	OM.classList.add('st0')
	OM.classList.remove('map-select')
	YE.classList.add('st0')
	YE.classList.remove('map-select')
	IL.classList.add('st0')
	IL.classList.remove('map-select')
	PS.classList.add('st0')
	PS.classList.remove('map-select')
	JO.classList.add('st0')
	JO.classList.remove('map-select')
	EG.classList.add('st0')
	EG.classList.remove('map-select')
	SY.classList.add('st0')
	SY.classList.remove('map-select')
	LB.classList.add('st0')
	LB.classList.remove('map-select')
})
OM.addEventListener('click', function () {
	saContent.style.transition = '0s'
	aeContent.style.transition = '0s'
	omContent.style.transition = '2s'
	yeContent.style.transition = '0s'
	ilpsContent.style.transition = '0s'
	joContent.style.transition = '0s'
	egContent.style.transition = '0s'
	syContent.style.transition = '0s'
	lbContent.style.transition = '0s'
	saContent.style.opacity = '0'
	aeContent.style.opacity = '0'
	omContent.style.opacity = '1'
	yeContent.style.opacity = '0'
	ilpsContent.style.opacity = '0'
	joContent.style.opacity = '0'
	egContent.style.opacity = '0'
	syContent.style.opacity = '0'
	lbContent.style.opacity = '0'
	// SA.style.fill = '#FFFFFF'
	// AE.style.fill = '#FFFFFF'
	// OM.style.fill = '#FFCB1B'
	// YE.style.fill = '#FFFFFF'
	// IL.style.fill = '#FFFFFF'
	// PS.style.fill = '#FFFFFF'
	// JO.style.fill = '#FFFFFF'
	// EG.style.fill = '#FFFFFF'
	// SY.style.fill = '#FFFFFF'
	// LB.style.fill = '#FFFFFF'
	SA.classList.add('st0')
	SA.classList.remove('map-select')
	AE.classList.add('st0')
	AE.classList.remove('map-select')
	OM.classList.remove('st0')
	OM.classList.add('map-select')
	YE.classList.add('st0')
	YE.classList.remove('map-select')
	IL.classList.add('st0')
	IL.classList.remove('map-select')
	PS.classList.add('st0')
	PS.classList.remove('map-select')
	JO.classList.add('st0')
	JO.classList.remove('map-select')
	EG.classList.add('st0')
	EG.classList.remove('map-select')
	SY.classList.add('st0')
	SY.classList.remove('map-select')
	LB.classList.add('st0')
	LB.classList.remove('map-select')
})
YE.addEventListener('click', function () {
	saContent.style.transition = '0s'
	aeContent.style.transition = '0s'
	omContent.style.transition = '0s'
	yeContent.style.transition = '2s'
	ilpsContent.style.transition = '0s'
	joContent.style.transition = '0s'
	egContent.style.transition = '0s'
	syContent.style.transition = '0s'
	lbContent.style.transition = '0s'
	saContent.style.opacity = '0'
	aeContent.style.opacity = '0'
	omContent.style.opacity = '0'
	yeContent.style.opacity = '1'
	ilpsContent.style.opacity = '0'
	joContent.style.opacity = '0'
	egContent.style.opacity = '0'
	syContent.style.opacity = '0'
	lbContent.style.opacity = '0'
	// SA.style.fill = '#FFFFFF'
	// AE.style.fill = '#FFFFFF'
	// OM.style.fill = '#FFFFFF'
	// YE.style.fill = '#FFCB1B'
	// IL.style.fill = '#FFFFFF'
	// PS.style.fill = '#FFFFFF'
	// JO.style.fill = '#FFFFFF'
	// EG.style.fill = '#FFFFFF'
	// SY.style.fill = '#FFFFFF'
	// LB.style.fill = '#FFFFFF'
	SA.classList.add('st0')
	SA.classList.remove('map-select')
	AE.classList.add('st0')
	AE.classList.remove('map-select')
	OM.classList.add('st0')
	OM.classList.remove('map-select')
	YE.classList.remove('st0')
	YE.classList.add('map-select')
	IL.classList.add('st0')
	IL.classList.remove('map-select')
	PS.classList.add('st0')
	PS.classList.remove('map-select')
	JO.classList.add('st0')
	JO.classList.remove('map-select')
	EG.classList.add('st0')
	EG.classList.remove('map-select')
	SY.classList.add('st0')
	SY.classList.remove('map-select')
	LB.classList.add('st0')
	LB.classList.remove('map-select')
})
IL.addEventListener('click', function () {
	saContent.style.transition = '0s'
	aeContent.style.transition = '0s'
	omContent.style.transition = '0s'
	yeContent.style.transition = '0s'
	ilpsContent.style.transition = '2s'
	joContent.style.transition = '0s'
	egContent.style.transition = '0s'
	syContent.style.transition = '0s'
	lbContent.style.transition = '0s'
	saContent.style.opacity = '0'
	aeContent.style.opacity = '0'
	omContent.style.opacity = '0'
	yeContent.style.opacity = '0'
	ilpsContent.style.opacity = '1'
	joContent.style.opacity = '0'
	egContent.style.opacity = '0'
	syContent.style.opacity = '0'
	lbContent.style.opacity = '0'
	// SA.style.fill = '#FFFFFF'
	// AE.style.fill = '#FFFFFF'
	// OM.style.fill = '#FFFFFF'
	// YE.style.fill = '#FFFFFF'
	// IL.style.fill = '#FFCB1B'
	// PS.style.fill = '#FFFFFF'
	// JO.style.fill = '#FFFFFF'
	// EG.style.fill = '#FFFFFF'
	// SY.style.fill = '#FFFFFF'
	// LB.style.fill = '#FFFFFF'
	SA.classList.add('st0')
	SA.classList.remove('map-select')
	AE.classList.add('st0')
	AE.classList.remove('map-select')
	OM.classList.add('st0')
	OM.classList.remove('map-select')
	YE.classList.add('st0')
	YE.classList.remove('map-select')
	IL.classList.remove('st0')
	IL.classList.add('map-select')
	PS.classList.add('st0')
	PS.classList.remove('map-select')
	JO.classList.add('st0')
	JO.classList.remove('map-select')
	EG.classList.add('st0')
	EG.classList.remove('map-select')
	SY.classList.add('st0')
	SY.classList.remove('map-select')
	LB.classList.add('st0')
	LB.classList.remove('map-select')
})
PS.addEventListener('click', function () {
	saContent.style.transition = '0s'
	aeContent.style.transition = '0s'
	omContent.style.transition = '0s'
	yeContent.style.transition = '0s'
	ilpsContent.style.transition = '2s'
	joContent.style.transition = '0s'
	egContent.style.transition = '0s'
	syContent.style.transition = '0s'
	lbContent.style.transition = '0s'
	saContent.style.opacity = '0'
	aeContent.style.opacity = '0'
	omContent.style.opacity = '0'
	yeContent.style.opacity = '0'
	ilpsContent.style.opacity = '1'
	joContent.style.opacity = '0'
	egContent.style.opacity = '0'
	syContent.style.opacity = '0'
	lbContent.style.opacity = '0'
	// SA.style.fill = '#FFFFFF'
	// AE.style.fill = '#FFFFFF'
	// OM.style.fill = '#FFFFFF'
	// YE.style.fill = '#FFFFFF'
	// IL.style.fill = '#FFFFFF'
	// PS.style.fill = '#FFCB1B'
	// JO.style.fill = '#FFFFFF'
	// EG.style.fill = '#FFFFFF'
	// SY.style.fill = '#FFFFFF'
	// LB.style.fill = '#FFFFFF'
	SA.classList.add('st0')
	SA.classList.remove('map-select')
	AE.classList.add('st0')
	AE.classList.remove('map-select')
	OM.classList.add('st0')
	OM.classList.remove('map-select')
	YE.classList.add('st0')
	YE.classList.remove('map-select')
	IL.classList.add('st0')
	IL.classList.remove('map-select')
	PS.classList.remove('st0')
	PS.classList.add('map-select')
	JO.classList.add('st0')
	JO.classList.remove('map-select')
	EG.classList.add('st0')
	EG.classList.remove('map-select')
	SY.classList.add('st0')
	SY.classList.remove('map-select')
	LB.classList.add('st0')
	LB.classList.remove('map-select')
})
JO.addEventListener('click', function () {
	saContent.style.transition = '0s'
	aeContent.style.transition = '0s'
	omContent.style.transition = '0s'
	yeContent.style.transition = '0s'
	ilpsContent.style.transition = '0s'
	joContent.style.transition = '2s'
	egContent.style.transition = '0s'
	syContent.style.transition = '0s'
	lbContent.style.transition = '0s'
	saContent.style.opacity = '0'
	aeContent.style.opacity = '0'
	omContent.style.opacity = '0'
	yeContent.style.opacity = '0'
	ilpsContent.style.opacity = '0'
	joContent.style.opacity = '1'
	egContent.style.opacity = '0'
	syContent.style.opacity = '0'
	lbContent.style.opacity = '0'
	// SA.style.fill = '#FFFFFF'
	// AE.style.fill = '#FFFFFF'
	// OM.style.fill = '#FFFFFF'
	// YE.style.fill = '#FFFFFF'
	// IL.style.fill = '#FFFFFF'
	// PS.style.fill = '#FFFFFF'
	// JO.style.fill = '#FFCB1B'
	// EG.style.fill = '#FFFFFF'
	// SY.style.fill = '#FFFFFF'
	// LB.style.fill = '#FFFFFF'
	SA.classList.add('st0')
	SA.classList.remove('map-select')
	AE.classList.add('st0')
	AE.classList.remove('map-select')
	OM.classList.add('st0')
	OM.classList.remove('map-select')
	YE.classList.add('st0')
	YE.classList.remove('map-select')
	IL.classList.add('st0')
	IL.classList.remove('map-select')
	PS.classList.add('st0')
	PS.classList.remove('map-select')
	JO.classList.remove('st0')
	JO.classList.add('map-select')
	EG.classList.add('st0')
	EG.classList.remove('map-select')
	SY.classList.add('st0')
	SY.classList.remove('map-select')
	LB.classList.add('st0')
	LB.classList.remove('map-select')
})
EG.addEventListener('click', function () {
	saContent.style.transition = '0s'
	aeContent.style.transition = '0s'
	omContent.style.transition = '0s'
	yeContent.style.transition = '0s'
	ilpsContent.style.transition = '0s'
	joContent.style.transition = '0s'
	egContent.style.transition = '2s'
	syContent.style.transition = '0s'
	lbContent.style.transition = '0s'
	saContent.style.opacity = '0'
	aeContent.style.opacity = '0'
	omContent.style.opacity = '0'
	yeContent.style.opacity = '0'
	ilpsContent.style.opacity = '0'
	joContent.style.opacity = '0'
	egContent.style.opacity = '1'
	syContent.style.opacity = '0'
	lbContent.style.opacity = '0'
	// SA.style.fill = '#FFFFFF'
	// AE.style.fill = '#FFFFFF'
	// OM.style.fill = '#FFFFFF'
	// YE.style.fill = '#FFFFFF'
	// IL.style.fill = '#FFFFFF'
	// PS.style.fill = '#FFFFFF'
	// JO.style.fill = '#FFFFFF'
	// EG.style.fill = '#FFCB1B'
	// SY.style.fill = '#FFFFFF'
	// LB.style.fill = '#FFFFFF'
	SA.classList.add('st0')
	SA.classList.remove('map-select')
	AE.classList.add('st0')
	AE.classList.remove('map-select')
	OM.classList.add('st0')
	OM.classList.remove('map-select')
	YE.classList.add('st0')
	YE.classList.remove('map-select')
	IL.classList.add('st0')
	IL.classList.remove('map-select')
	PS.classList.add('st0')
	PS.classList.remove('map-select')
	JO.classList.add('st0')
	JO.classList.remove('map-select')
	EG.classList.remove('st0')
	EG.classList.add('map-select')
	SY.classList.add('st0')
	SY.classList.remove('map-select')
	LB.classList.add('st0')
	LB.classList.remove('map-select')
})
SY.addEventListener('click', function () {
	saContent.style.transition = '0s'
	aeContent.style.transition = '0s'
	omContent.style.transition = '0s'
	yeContent.style.transition = '0s'
	ilpsContent.style.transition = '0s'
	joContent.style.transition = '0s'
	egContent.style.transition = '0s'
	syContent.style.transition = '2s'
	lbContent.style.transition = '0s'
	saContent.style.opacity = '0'
	aeContent.style.opacity = '0'
	omContent.style.opacity = '0'
	yeContent.style.opacity = '0'
	ilpsContent.style.opacity = '0'
	joContent.style.opacity = '0'
	egContent.style.opacity = '0'
	syContent.style.opacity = '1'
	lbContent.style.opacity = '0'
	// SA.style.fill = '#FFFFFF'
	// AE.style.fill = '#FFFFFF'
	// OM.style.fill = '#FFFFFF'
	// YE.style.fill = '#FFFFFF'
	// IL.style.fill = '#FFFFFF'
	// PS.style.fill = '#FFFFFF'
	// JO.style.fill = '#FFFFFF'
	// EG.style.fill = '#FFFFFF'
	// SY.style.fill = '#FFCB1B'
	// LB.style.fill = '#FFFFFF'
	SA.classList.add('st0')
	SA.classList.remove('map-select')
	AE.classList.add('st0')
	AE.classList.remove('map-select')
	OM.classList.add('st0')
	OM.classList.remove('map-select')
	YE.classList.add('st0')
	YE.classList.remove('map-select')
	IL.classList.add('st0')
	IL.classList.remove('map-select')
	PS.classList.add('st0')
	PS.classList.remove('map-select')
	JO.classList.add('st0')
	JO.classList.remove('map-select')
	EG.classList.add('st0')
	EG.classList.remove('map-select')
	SY.classList.remove('st0')
	SY.classList.add('map-select')
	LB.classList.add('st0')
	LB.classList.remove('map-select')
})
LB.addEventListener('click', function () {
	saContent.style.transition = '0s'
	aeContent.style.transition = '0s'
	omContent.style.transition = '0s'
	yeContent.style.transition = '0s'
	ilpsContent.style.transition = '0s'
	joContent.style.transition = '0s'
	egContent.style.transition = '0s'
	syContent.style.transition = '0s'
	lbContent.style.transition = '2s'
	saContent.style.opacity = '0'
	aeContent.style.opacity = '0'
	omContent.style.opacity = '0'
	yeContent.style.opacity = '0'
	ilpsContent.style.opacity = '0'
	joContent.style.opacity = '0'
	egContent.style.opacity = '0'
	syContent.style.opacity = '0'
	lbContent.style.opacity = '1'
	// SA.style.fill = '#FFFFFF'
	// AE.style.fill = '#FFFFFF'
	// OM.style.fill = '#FFFFFF'
	// YE.style.fill = '#FFFFFF'
	// IL.style.fill = '#FFFFFF'
	// PS.style.fill = '#FFFFFF'
	// JO.style.fill = '#FFFFFF'
	// EG.style.fill = '#FFFFFF'
	// SY.style.fill = '#FFFFFF'
	// LB.style.fill = '#FFCB1B'
	SA.classList.add('st0')
	SA.classList.remove('map-select')
	AE.classList.add('st0')
	AE.classList.remove('map-select')
	OM.classList.add('st0')
	OM.classList.remove('map-select')
	YE.classList.add('st0')
	YE.classList.remove('map-select')
	IL.classList.add('st0')
	IL.classList.remove('map-select')
	PS.classList.add('st0')
	PS.classList.remove('map-select')
	JO.classList.add('st0')
	JO.classList.remove('map-select')
	EG.classList.add('st0')
	EG.classList.remove('map-select')
	SY.classList.add('st0')
	SY.classList.remove('map-select')
	LB.classList.remove('st0')
	LB.classList.add('map-select')
})
