<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ChangePasswordRequest;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;

class ChangePasswordController extends Controller
{   
     /**
     * Process the password change request.
     *
     * @param ChangePasswordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function process(ChangePasswordRequest $request)
    {
        // Check if there is a matching password reset entry for the email and token
        return $this->getPasswordResetTableRow($request)->count()> 0 ? $this->changePassword($request) : $this->tokenNotFoundResponse();
    }

    /**
     * Get the password reset row based on email and token.
     *
     * @param ChangePasswordRequest $request
     * @return \Illuminate\Database\Query\Builder
     */
    private function getPasswordResetTableRow($request)
    {
        // Query the password_resets table for the matching email and token
        return DB::table('password_resets')->where(['email' => $request->email,'token' =>$request->resetToken]);
    }

    /**
     * Handle the case where token or email is not found.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    private function tokenNotFoundResponse()
    {
        // Return an error response if token or email is incorrect
        return response()->json(['error' => 'Token or Email is incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    /**
     * Change the user's password after validation.
     *
     * @param ChangePasswordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    private function changePassword($request)
    {
        // Find the user by email and update their password
        $user = User::whereEmail($request->email)->first();
        $user->update(['password'=>$request->password]);

        // Delete the password reset entry after successful password change
        $this->getPasswordResetTableRow($request)->delete();

        // Return success response
        return response()->json(['data'=>'Password Successfully Changed'],Response::HTTP_CREATED);
    }
    
}
