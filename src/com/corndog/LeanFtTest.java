package com.corndog;

import java.util.Random;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import com.hp.lft.report.*;
import com.hp.lft.sdk.web.*;

import com.hp.lft.sdk.*;
import com.hp.lft.verifications.*;

import unittesting.*;

public class LeanFtTest extends UnitTestClassBase {
	Random randomGenerator = new Random();
	
    @BeforeClass
    public void beforeClass() {
    }

    @AfterClass
    public void afterClass() {
    }

    @BeforeMethod
    public void beforeMethod() {
    }

    @AfterMethod
    public void afterMethod() {
    }

    /*
    @Test (dataProvider="TestNames")
    public void parallelTest(String myTestName, int sleepTime) throws GeneralLeanFtException, ReportException, InterruptedException {
    	Reporter.reportEvent("Info: "+myTestName, "Test: Thread id = " + Thread.currentThread().getId());
    	
    	Thread.sleep(sleepTime);
    	Reporter.reportEvent("done", "");
    	
    }
    @DataProvider(name="TestNames", parallel=true)
    public Object[][] getTestNamesData() {
        return new Object[][]{
            {"Larry", 2000},
            {"Curly", 3000},
            {"Moe", 1000},
            {"Shemp", 4000},
            {"Tom", 2500},
            {"Jerry", 5000}
        };
    }*/
    
    @Test
    public void parallelMethod()throws GeneralLeanFtException, ReportException, InterruptedException {
    	long id = Thread.currentThread().getId();
    	System.out.println("Simple parallelMethod. Thread id is: " + id);
    	Reporter.reportEvent("Info: ", "Test: Thread id = " + id);
    	int x = randomGenerator.nextInt(100)*100;
    	Thread.sleep(x);
    	Reporter.reportEvent("Slept"+x, "");
    }
    @Test
    public void testMethodsOne() throws ReportException, InterruptedException {
        long id = Thread.currentThread().getId();
        System.out.println("Simple test-method One. Thread id is: " + id);
        Reporter.reportEvent("Info: ", "Test: Thread id = " + id);
    	int x = randomGenerator.nextInt(100)*100;
    	Thread.sleep(x);
    	Reporter.reportEvent("Slept"+x, "");
    }
    
    @Test
    public void testMethodsThree() throws ReportException, InterruptedException {
        long id = Thread.currentThread().getId();
        System.out.println("Simple test-method Three. Thread id is: " + id);
        Reporter.reportEvent("Info: ", "Test: Thread id = " + id);
    	int x = randomGenerator.nextInt(100)*100;
    	Thread.sleep(x);
    	Reporter.reportEvent("Slept"+x, "");
    }
    
    @Test
    public void testMethodsFour() throws ReportException, InterruptedException {
        long id = Thread.currentThread().getId();
        System.out.println("Simple test-method Four. Thread id is: " + id);
        Reporter.reportEvent("Info: ", "Test: Thread id = " + id);
    	int x = randomGenerator.nextInt(100)*100;
    	Thread.sleep(x);
    	Reporter.reportEvent("Slept"+x, "");
    }
    
    @Test
    public void testMethodsFive() throws ReportException, InterruptedException {
        long id = Thread.currentThread().getId();
        System.out.println("Simple test-method Five. Thread id is: " + id);
        Reporter.reportEvent("Info: ", "Test: Thread id = " + id);
    	int x = randomGenerator.nextInt(100)*100;
    	Thread.sleep(x);
    	Reporter.reportEvent("Slept"+x, "");
    }
    
    @Test
    public void testMethodsTwo() throws ReportException, InterruptedException {
        long id = Thread.currentThread().getId();
        System.out.println("Simple test-method Two. Thread id is: " + id);
        Reporter.reportEvent("Info: ", "Test: Thread id = " + id);
    	int x = randomGenerator.nextInt(100)*100;
    	Thread.sleep(x);
    	Reporter.reportEvent("Slept"+x, "");
    }
}