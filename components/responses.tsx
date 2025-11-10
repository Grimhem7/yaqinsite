import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import React from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kajgxwrhzesgqbkrgcxc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imthamd4d3JoemVzZ3Fia3JnY3hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwNzc2ODAsImV4cCI6MjAwNjY1MzY4MH0.ysoFaFdi_mFj7K3U_U0VK5hbWoFe81RyvM-8qEt3EAM';
const supabase = createClient(supabaseUrl, supabaseKey);

interface SurveyResponse {
    id: number;
    created_at: string;
    answers: {
      question_id: number;
      answers: string[];
    }[];
}

export default function SurveyResponses() {
    const router = useRouter();
    const [surveyResponses, setSurveyResponses] = useState<SurveyResponse[]>([]);
    const [notBackedResponses, setNotBackedResponses] = useState<SurveyResponse[]>([]);
    const [answeredBackerCount, setAnsweredBackerCount] = useState<number | null>(null);
    const [answeredNotBackerCount, setAnsweredNotBackerCount] = useState<number | null>(null);

    useEffect(() => {
        // Fetch data from Supabase
        async function fetchSupabaseData() {
          const { data, error } = await supabase.from('backed').select('*');
          if (error) {
            console.error('Error fetching data from Supabase:', error);
          } else {
            // Check if data exists and set the count
            if (data) {
              const numberOfAnsweredUsers = data.length;
              setAnsweredBackerCount(numberOfAnsweredUsers);
            }
          }
        }
    
        // Call the fetchSupabaseData function to initiate the data fetch
        fetchSupabaseData();
      }, []);

      useEffect(() => {
        // Fetch data from Supabase
        async function fetchSupabaseData() {
          const { data, error } = await supabase.from('not-backed').select('*');
          if (error) {
            console.error('Error fetching data from Supabase:', error);
          } else {
            // Check if data exists and set the count
            if (data) {
              const numberOfAnsweredUsers = data.length;
              setAnsweredNotBackerCount(numberOfAnsweredUsers);
            }
          }
        }
    
        // Call the fetchSupabaseData function to initiate the data fetch
        fetchSupabaseData();
      }, []);

    useEffect(() => {
        async function fetchNotBackedResponses() {
            try {
                const { data, error } = await supabase.from('not-backed').select('*');
                if (error) {
                    console.error('Error fetching not-backed survey responses:', error);
                } else {
                    if (data) {
                        console.log('Not-backed survey responses:', data);
                        setNotBackedResponses(data);
                    }
                }
            } catch (error) {
                console.error('Error fetching not-backed survey responses:', error);
            }
        }
        fetchNotBackedResponses();
    }, []);

    useEffect(() => {
        async function fetchSurveyResponses() {
            try {
                const { data, error } = await supabase.from('backed').select('*');
                if (error) {
                    console.error('Error fetching survey responses:', error);
                } else {
                    if (data) {
                        console.log('Survey responses:', data);
                        setSurveyResponses(data);
                    }
                }
            } catch (error) {
                console.error('Error fetching survey responses:', error);
            }
        }
        fetchSurveyResponses();
    }, []);
  
    // Extract all unique question IDs from the survey responses
    const questionIds: number[] = Array.from(
      new Set(surveyResponses.flatMap(response => response.answers.map(answer => answer.question_id)))
    );

    const handleLogout = () => {
        // Clear authentication state by removing the cookie
        Cookies.remove('adminLoggedIn');
        // Redirect to the login page on logout
        router.push('/login');
      };
  
    return (
        <div className='py-20 min-h-screen gap-10 flex justify-center flex-col' style={{ backgroundImage: 'url("/images/bg.svg")' }}>
        <Head>
        <title>E-commerce</title>
        <meta name="description" content="E-commerce description" />
        <meta property="og:title" content="E-commerce" />
        <meta property="og:description" content="E-commerce survey" />
        <meta property="og:image" content="/images/preview.png" />
        <link rel="icon" href="/favicon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ELRGRNPYZQ');
            `,
          }}
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ELRGRNPYZQ"
        ></script>
      </Head>
        <h1 className='text-3xl font-bold text-center py-6'>Survey Responses</h1>
        <div className='overflow-scroll'>
                <div className='py-8 container lg:p-16 lg:h-fit mx-auto lg:rounded-lg lg:shadow-2xl font-medium bgwhite'>
                <h1 className='text-2xl text-center py-6'>For backers ({answeredBackerCount})</h1>
                    <table className='text-center mx-auto'>
                        <thead>
                            <tr className='text-sm'>
                                <th className='lg:w-[50px] p-4 font-light'>What led you to back our campaign?</th>
                                <th className='lg:w-[50px] p-4 font-light'>Did the health feature influence your decision to back E-commerce?</th>
                                <th className='lg:w-[50px] p-4 font-light'>Did the location tracking influence your decision to back E-commerce?</th>
                                <th className='lg:w-[50px] p-4 font-light'>What aspects of the E-commerce are most appealing?</th>
                                <th className='lg:w-[50px] p-4 font-light'>Rate the AI-powered health app feature</th>
                                <th className='lg:w-[50px] p-4 font-light'>How do you expect E-commerce to improve your pet ownership experience?</th>
                                <th className='lg:w-[50px] p-4 font-light'>What do you want to solve by using our product?</th>
                                <th className='lg:w-[50px] p-4 font-light'>Please rate your satisfaction with the E-commerce Kickstarter</th>
                                <th className='lg:w-[50px] p-4 font-light'>Why ?</th>
                                <th className='lg:w-[50px] p-4 font-light'>Other suggestions</th>
                                <th className='lg:w-[50px] p-4 font-light'>cat(s) or dog(s)</th>
                                <th className='lg:w-[50px] p-4 font-light'>Number of pets</th>
                                <th className='lg:w-[50px] p-4 font-light'>The owner's age</th>
                                <th className='lg:w-[50px] p-4 font-light'>Man or Woman</th>
                            </tr>
                        </thead>
                        <tbody>
                            {surveyResponses.map((response, index) => (
                                <tr key={index}>
                                    {questionIds.map(questionId => (
                                        <td className='lg:w-[50px] p-4 font-light' key={questionId}>
                                            {response.answers
                                                .filter(answer => answer.question_id === questionId)
                                                .map(answer => answer.answers.join(', '))}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='overflow-scroll'>
                <div className='py-8 container lg:p-16 lg:h-fit mx-auto lg:rounded-lg lg:shadow-2xl font-medium bgwhite'>
                    <h1 className='text-2xl text-center py-6'>For not backers ({answeredNotBackerCount})</h1>
                    <table className='text-center mx-auto'>
                        <thead>
                            <tr className='text-sm'>
                                <th className='lg:w-[50px] p-4 font-light'>Did you consider backing E-commerce on Kickstarter?</th>
                                <th className='lg:w-[50px] p-4 font-light'>What's the reason for not purchase?</th>
                                <th className='lg:w-[50px] p-4 font-light'>What makes you feel comfortable being backed?</th>
                                <th className='lg:w-[50px] p-4 font-light'>What is difficult to understand?</th>
                                <th className='lg:w-[50px] p-4 font-light'>Most important feature for you</th>
                                <th className='lg:w-[50px] p-4 font-light'>What is missing us?</th>
                                <th className='lg:w-[50px] p-4 font-light'>Specific concerns or hesitations</th>
                                <th className='lg:w-[50px] p-4 font-light'>Issues Kickstarter or purchase?</th>
                                <th className='lg:w-[50px] p-4 font-light'>Price makes you not buy the tag</th>
                                <th className='lg:w-[50px] p-4 font-light'>Other feedback</th>
                                <th className='lg:w-[50px] p-4 font-light'>cat(s) or dog(s)</th>
                                <th className='lg:w-[50px] p-4 font-light'>Number of pets</th>
                                <th className='lg:w-[50px] p-4 font-light'>The owner's age</th>
                                <th className='lg:w-[50px] p-4 font-light'>Man or Woman</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notBackedResponses.map((response, index) => (
                                <tr key={index}>
                                    {questionIds.map(questionId => (
                                        <td className='lg:w-[50px] p-4 font-light' key={questionId}>
                                            {response.answers
                                                .filter(answer => answer.question_id === questionId)
                                                .map(answer => answer.answers.join(', '))}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <button className='bg-red-500 w-fit mx-auto text-white px-4 py-2 rounded' onClick={handleLogout}>Logout</button>
        </div>
    );
  }
  