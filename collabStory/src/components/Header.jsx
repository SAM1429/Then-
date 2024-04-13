"use client";

import React from 'react'
import {  Button, Navbar, NavbarToggle, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'


export default function Header() {
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white '>
            <span className='px-2 py-1 bg-indigo-400 text-white rounded-lg'>Then?</span>
        </Link>
        <form>
        <TextInput
          type='text'
          placeholder='And the chosen story is..'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden ' color = 'gray' pill>
        <AiOutlineSearch/>
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className='w-12 h-10 hidden sm:inline 'color = 'gray' pill> 
            <FaMoon/>
        </Button>
        <NavbarToggle/>
        <Link to = 'signin'>  <Button color = 'gray' > 
            Sign In
        </Button></Link>
      </div>
      <Navbar.Collapse>
            <Navbar.Link as={'div'}>
                <Link to = '/' >
                    Home
                </Link>
                </Navbar.Link>
                <Navbar.Link as={'div'}>
                <Link to = '/about' >
                    About
                </Link>
                </Navbar.Link>
                <Navbar.Link as={'div'}>
                <Link to = '/activity' >
                    Your Activity
                </Link>
                </Navbar.Link>
        
        </Navbar.Collapse>
    </Navbar>
  )
}
