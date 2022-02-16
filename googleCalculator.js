/* 
Name: Autotest Google Calculator
Author: Poptsova Anna
Date: 16.02.2022
 */

const puppeteer = require('puppeteer');

async function testCalculator(){
    console.log('Открыть браузер');
	const browser = await puppeteer.launch({headless: false, slowMo: 100});
    
    console.log('Создание новой вкладки в браузере');   
    const page = await browser.newPage();

    console.log('Открыть страницу http://google.com');
    await page.goto('http://google.com');              

    console.log('В поисковую строку ввести слово “Калькулятор”');
    const searchField = await page.$('.gLFyf');
    await searchField.type('Калькулятор');

    console.log('Нажать на кнопку поиска');
    const searchButton = await page.$('.gNO89b');
    await searchButton.click();
	
	console.log('Ожидание перехода на страницу поисковых результатов');
	await page.waitForNavigation();
		
	console.log('В открывшемся калькуляторе вводим выражение "1*2-3+1" и нажимаем "="');
	const symbolButton1 = await page.$('.ElumCf > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1) > div:nth-child(1) > div:nth-child(1)');
    await symbolButton1.click();
	
	const symbolButton2 = await page.$('.ElumCf > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(4) > div:nth-child(1) > div:nth-child(1)');
    await symbolButton2.click();
	
	const symbolButton3 = await page.$('.ElumCf > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(2) > div:nth-child(1) > div:nth-child(1)');
    await symbolButton3.click();
	
	const symbolButton4 = await page.$('.ElumCf > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(4) > div:nth-child(1) > div:nth-child(1)');
    await symbolButton4.click();
	
	const symbolButton5 = await page.$('.ElumCf > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1)');
    await symbolButton5.click();
	
	const symbolButton6 = await page.$('.ElumCf > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(4) > div:nth-child(1) > div:nth-child(1)');
    await symbolButton6.click();
		
	const symbolButton7 = await page.$('.ElumCf > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1) > div:nth-child(1) > div:nth-child(1)');
    await symbolButton7.click();
	
	const symbolButton8 = await page.$('.UUhRt');
    await symbolButton8.click();
		
	console.log('Получение результата подсчета');
	const result = await page.$eval('#cwos', element => element.textContent);
    	
    console.log('Сравнение ОР и ФР');
    if(result == 0){
        console.log('Результат верный');
    } else {
        console.log('Результат не верный');
    }
		
	console.log('Создание скриншота');
	await page.screenshot({path: 'testCalculator.png'});
 
    console.log('Закрытие браузера');
    await browser.close();
}
testCalculator();



